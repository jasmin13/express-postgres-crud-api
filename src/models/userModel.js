import pool from "../config/db.js";

// Service to retrieve all users from the database
export const getAllUsersService = async () => {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
};
// Service to retrieve a specific user by their ID
export const getUserByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
};
// Service to create a new user with name and email
export const createUSerService = async (name, email) => {
    const result = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *", [name, email]);
    return result.rows[0];
};
// Service to update an existing user's information
export const updateUserService = async (id, name, email) => {
    const result = await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *", [name, email, id]);
    return result.rows[0];
};
// Service to remove a user from the database
export const deleteUserService = async (id) => {
    const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};
