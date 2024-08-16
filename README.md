# Task Manager APIs

A simple RESTful API built with Node.js and Express.js for managing tasks. This API supports CRUD (Create, Read, Update, Delete) operations for tasks using an in-memory data store.

## Features

- Create new tasks
- Retrieve all tasks or a single task by ID
- Update existing tasks
- Delete tasks
- Input validation and error handling

## Postman Collection
[Task Manager APIs](https://www.postman.com/airtribe-kav/workspace/backend/collection/10389495-e9e41a67-4a8d-4c78-8d5e-59d397147b6b?action=share&creator=10389495)

## Installation

1. **Clone the repository:**
   git clone https://github.com/yourusername/task-manager-api.git
   cd task-manager
2. **Install dependencies:**
   npm install
3. **Start the server:**
   npm run start
   
## Validation Rules
Title: Must be a non-empty string if provided.
Description: Must be a non-empty string if provided.
Completed: Must be a boolean value if provided.
