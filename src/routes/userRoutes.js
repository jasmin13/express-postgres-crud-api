import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from "../controllers/userController.js";
import validateUser from "../middlewares/inputValidator.js";

// Initialize express router
const router = express.Router();

// User Routes
// POST /api/user - Create a new user (with input validation)
router.post("/user", validateUser, createUser);

// GET /api/user - Retrieve all users
router.get("/user", getAllUsers);

// GET /api/user/:id - Retrieve a specific user by ID
router.get("/user/:id", getUserById);

// PUT /api/user/:id - Update a user (with input validation)
router.put("/user/:id", validateUser, updateUser);

// DELETE /api/user/:id - Remove a user
router.delete("/user/:id", deleteUser);

export default router;