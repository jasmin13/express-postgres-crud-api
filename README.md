# Express PostgreSQL CRUD API

A RESTful API built with Express.js and PostgreSQL for managing user data with full CRUD operations.

## Features

- User management (Create, Read, Update, Delete)
- PostgreSQL database integration
- Input validation
- Error handling middleware
- Environment variable configuration
- CORS enabled

## Prerequisites

- Node.js
- npm or yarn
- Docker (required for PostgreSQL and pgAdmin4)
- Git

## Installation

### Standard Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=5001
   DB_USER=postgres
   DB_HOST=localhost
   DB_NAME=express-crud
   DB_PASSWORD=postgres
   DB_PORT=5432
   ```

### Docker Setup

1. Make sure Docker Desktop is installed and running
2. Install pgAdmin4 from Docker Desktop:
   - Open Docker Desktop
   - Go to the Extensions/Add-ons section
   - Search for pgAdmin4
   - Click Install
3. Install PostgreSQL in a Docker container:
   ```bash
   docker pull postgres:latest
   docker run --name postgres-db -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
   ```
4. Access pgAdmin4:
   - Open Docker Desktop
   - Go to the Extensions section
   - Click on pgAdmin4 to launch it
   - Default login email and password will be shown in the extension interface
5. Configure your PostgreSQL connection in pgAdmin4:
   - Add new server:
     - Name: Local PostgreSQL
     - Host: host.docker.internal
     - Port: 5432
     - Username: postgres
     - Password: postgres

## Database Setup

The application will automatically create the required `users` table when started. The table schema includes:

- `id`: SERIAL PRIMARY KEY
- `name`: VARCHAR(255) NOT NULL
- `email`: VARCHAR(255) NOT NULL UNIQUE
- `created_at`: TIMESTAMP DEFAULT NOW()

## Running the Application

```bash
npm start
```

The server will start on the port specified in your `.env` file (default: 5001).

## API Endpoints

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a specific user
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update a user
- `DELETE /api/users/:id` - Delete a user

### Request Body Example (POST/PUT)

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

## Error Handling

The API includes middleware for handling various types of errors:
- Validation errors
- Database errors
- Not found errors
- General server errors

## Project Structure

```
├── src/
│   ├── config/
│   │   └── db.js           # Database configuration
│   ├── controllers/
│   │   └── userController.js
│   ├── data/
│   │   └── createUserTable.js
│   ├── middlewares/
│   │   ├── errorHandler.js
│   │   └── inputValidator.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── userRoutes.js
│   └── index.js            # Application entry point
├── .env                    # Environment variables
└── package.json
```

## Technologies Used

- Express.js
- PostgreSQL
- node-postgres (pg)
- CORS
- dotenv
- Joi (Data Validation)
- Docker
- pgAdmin4


## Data Validation

This API uses Joi for input validation. The following validations are implemented:

### User Data Validation
- **name**: String, minimum 3 characters, required
- **email**: Valid email format, required

Validation is implemented as middleware that checks all incoming requests to user-related endpoints. If validation fails, the API returns a 400 Bad Request response with a descriptive error message.