// Import required packages for PostgreSQL connection
import pkg from 'pg';
import dotenv from 'dotenv';
const { Pool } = pkg;

// Load environment variables from .env file
dotenv.config();

// Create a new PostgreSQL connection pool with environment variables
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT, 10)
});

// Event listener for successful database connections
pool.on("connect", () => {
    console.log("Connected to the database successfully");
});

pool.on("error", (err) => {
    console.error("Unexpected database error:", err.message);
});

export default pool;