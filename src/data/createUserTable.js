import pool from "../config/db.js";

// Function to create users table if it doesn't exist
// Table Schema:
// - id: auto-incrementing primary key
// - name: required string field
// - email: required unique string field
// - created_at: timestamp with default value of current time
export const createUserTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      created_at TIMESTAMP DEFAULT NOW()
    );
    `;
    try {
        // Execute table creation query
        await pool.query(queryText);
        console.log("User table created if not exists");
    } catch(err) {
        // Log any errors during table creation
        console.log("Error creating users table: ", err);
    }
};

export default createUserTable;