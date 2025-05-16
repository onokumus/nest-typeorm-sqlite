# Nest.js TypeORM SQLite CRUD API

This project is a CRUD (Create, Read, Update, Delete) API built with Nest.js, TypeORM, and SQLite. It manages user data with basic operations (create, list, update, delete users). The project is written in TypeScript and uses SQLite for a lightweight, serverless database, ideal for development and testing.

## Features
- Create, read, update, and delete user records.
- Strong type safety with TypeScript.
- Lightweight SQLite database for quick setup.
- Clean, modular code structure with Nest.js.
- Basic error handling and data validation.

## Technologies
- **Nest.js**: Backend framework
- **TypeORM**: Object-Relational Mapping (ORM) tool
- **SQLite**: File-based database
- **TypeScript**: Type-safe programming language
- **Node.js**: Runtime environment

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)
- Git (optional, for cloning the repository)

### Step-by-Step Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/onokumus/nest-typeorm-sqlite.git
   cd nest-typeorm-sqlite

2. **Install Dependencies**
    ```bash
    npm i

3. **Run the Application**
    ```bash
    npm run start:dev


## API Endpoints

| Method | Endpoint    | Description        | Request Body Example |
|--------|------------|-------------------|---------------------|
| POST   | /users     | Create a new user | `{"name":"Osman","email":"osman@example.com"}` |
| GET    | /users     | List all users    | - |
| GET    | /users/:id | Get a user by ID  | - |
| PUT    | /users/:id | Update a user by ID| `{"name":"David","email":"david@example.com"}` |
| DELETE | /users/:id | Delete a user by ID| - |