# GraphQL React App

This project is a full-stack application that utilizes GraphQL for the backend and React for the frontend. It also includes Playwright for automated testing.

## Project Structure

```
graphql-react-app
├── backend                # Contains the backend server code
│   ├── src
│   │   ├── index.js      # Entry point for the backend application
│   │   ├── resolvers     # Contains resolver functions for GraphQL
│   │   │   └── index.js
│   │   └── schema        # Contains GraphQL schema type definitions
│   │       └── typeDefs.js
│   ├── package.json       # Backend dependencies and scripts
│   └── README.md          # Backend documentation
├── frontend               # Contains the frontend React application
│   ├── src
│   │   ├── App.jsx       # Main component of the React application
│   │   ├── components     # Contains React components
│   │   │   └── ExampleComponent.jsx
│   │   └── graphql        # Contains GraphQL queries
│   │       └── queries.js
│   ├── package.json       # Frontend dependencies and scripts
│   └── README.md          # Frontend documentation
├── tests                  # Contains automated tests
│   ├── playwright.config.js # Playwright configuration
│   └── example.spec.js    # Example Playwright test script
└── README.md              # General project documentation
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd graphql-react-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

### Running Tests

To run the Playwright tests, navigate to the `tests` directory and execute:
```
npx playwright test
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.