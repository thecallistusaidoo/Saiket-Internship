// Dark mode toggle
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

// Form validation
const form = document.getElementById("subscribeForm");
const emailInput = document.getElementById("emailInput");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value;

  if (!email.includes("@")) {
    message.textContent = "Please enter a valid email.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Subscription successful!";
  message.style.color = "limegreen";
  emailInput.value = "";
});
