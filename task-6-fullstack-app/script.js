const API_URL = "http://localhost:3000/api/task5/users";

const usersDiv = document.getElementById("users");
const form = document.getElementById("user-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");

// Load users on page load
document.addEventListener("DOMContentLoaded", fetchUsers);

// --------------------
// ADD USER
// --------------------
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const age = ageInput.value.trim();

  if (!name || !email || !age) {
    alert("All fields are required");
    return;
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, age }),
    });

    if (!res.ok) {
      const err = await res.json();
      alert(err.message || "Failed to add user");
      return;
    }

    // Clear inputs
    nameInput.value = "";
    emailInput.value = "";
    ageInput.value = "";

    fetchUsers(); // refresh list
  } catch (error) {
    alert("Server error");
  }
});

// --------------------
// FETCH USERS
// --------------------
async function fetchUsers() {
  try {
    const res = await fetch(API_URL);
    const users = await res.json();

    usersDiv.innerHTML = "";

    if (users.length === 0) {
      usersDiv.innerHTML = "<p>No users found</p>";
      return;
    }

    users.forEach((user) => {
      const div = document.createElement("div");
      div.className = "user-card";

      div.innerHTML = `
        <div class="user-info">
            <input type="text" value="${user.name}" disabled id="name-${user._id}">
            <input type="email" value="${user.email}" disabled id="email-${user._id}">
            <input type="number" value="${user.age}" disabled id="age-${user._id}">
        </div>

        <div class="user-actions">
            <button onclick="enableEdit('${user._id}')">Edit</button>
            <button onclick="saveEdit('${user._id}')">Save</button>
            <button class="danger" onclick="deleteUser('${user._id}')">Delete</button>
        </div>
        `;


      usersDiv.appendChild(div);
    });
  } catch (error) {
    usersDiv.innerHTML = "<p>Error loading users</p>";
  }
}

// --------------------
// DELETE USER
// --------------------
async function deleteUser(id) {
  if (!confirm("Delete this user?")) return;

  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      alert("Failed to delete user");
      return;
    }

    fetchUsers(); // refresh list
  } catch (error) {
    alert("Server error");
  }
}

function enableEdit(id) {
  document.getElementById(`name-${id}`).disabled = false;
  document.getElementById(`email-${id}`).disabled = false;
  document.getElementById(`age-${id}`).disabled = false;
}

async function saveEdit(id) {
  const name = document.getElementById(`name-${id}`).value.trim();
  const email = document.getElementById(`email-${id}`).value.trim();
  const age = document.getElementById(`age-${id}`).value.trim();

  if (!name || !email || !age) {
    alert("All fields are required");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, age }),
    });

    if (!res.ok) {
      alert("Failed to update user");
      return;
    }

    fetchUsers(); // refresh UI
  } catch (error) {
    alert("Server error");
  }
}
