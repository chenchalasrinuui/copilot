# GraphQL React App Backend

This is the backend part of the GraphQL React application. It is built using Node.js and Apollo Server to provide a GraphQL API.

## Getting Started

To get started with the backend, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd graphql-react-app/backend
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the server**:
   ```
   npm start
   ```

   The server will start on `http://localhost:4000` by default.

## API Documentation

The backend exposes a GraphQL API. You can use tools like [GraphQL Playground](https://www.graphql-playground.com/) or Postman to interact with the API.

### Schema

The GraphQL schema is defined in `src/schema/typeDefs.js`. It includes the types, queries, and mutations available.

### Resolvers

The resolver functions are defined in `src/resolvers/index.js`. They handle the logic for fetching data based on the GraphQL queries and mutations.

## Testing

To run tests for the backend, use the following command:
```
npm test
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.