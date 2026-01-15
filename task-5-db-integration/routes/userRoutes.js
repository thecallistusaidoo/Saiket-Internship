const express = require("express");
const router = express.Router();
const Task5User = require("../models/User");

/**
 * CREATE user
 * POST /api/task5/users
 */
router.post("/", async (req, res) => {
  try {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = new Task5User({ name, email, age });
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * READ all users
 * GET /api/task5/users
 */
router.get("/", async (req, res) => {
  try {
    const users = await Task5User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * READ single user by ID
 * GET /api/task5/users/:id
 */
router.get("/:id", async (req, res) => {
  try {
    const user = await Task5User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Invalid ID format" });
  }
});

/**
 * UPDATE user
 * PUT /api/task5/users/:id
 */
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await Task5User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * DELETE user
 * DELETE /api/task5/users/:id
 */
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await Task5User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: "Invalid ID format" });
  }
});

module.exports = router;
