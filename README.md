# User Account Management API

This project is a Node.js application that uses Express to manage user accounts. It provides a RESTful API for creating, retrieving, updating, and deleting user information.

## Project Structure

```
nodeaccounts
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains controllers for handling requests
│   │   └── userController.js  # User-related request handlers
│   ├── models                # Contains data models
│   │   └── userModel.js       # User data model
│   ├── routes                # Contains route definitions
│   │   └── userRoutes.js      # User-related routes
│   └── services              # Contains business logic
│       └── userService.js     # User management logic
├── .gitignore                # Specifies files to ignore in Git
├── package.json              # npm configuration file
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd nodeaccounts
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run the following command:
```
npm start
```

The API will be available at `http://localhost:3000`.

## API Endpoints

- `POST /users` - Create a new user
- `GET /users/:id` - Retrieve a user by ID
- `PUT /users/:id` - Update a user by ID (deprecated)
- `PUT /users/:id/update` - Update a user by ID (v2)
- `PUT /users/:id/update-v2` - Update a user's first and last name by ID (v2)
   - Request body:
      ```json
      {
         "firstName": "John",
         "lastName": "Doe"
      }
      ```
- `DELETE /users/:id` - Delete a user by ID

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.