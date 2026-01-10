const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

let users = [];
let nextId = 1;

// Create a new user
app.post("/users", (req, res) => {
  const { name, email, age } = req.body;

  if (!name || !email || !age) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newUser = {
    id: nextId++,
    name,
    email,
    age,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Get user by ID
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

// Update user by ID
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, age } = req.body;

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = name ?? user.name;
  user.email = email ?? user.email;
  user.age = age ?? user.age;

  res.json(user);
});

// Delete user by ID
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users.splice(index, 1);
  res.json({ message: "User deleted successfully" });
});


// Test route
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
