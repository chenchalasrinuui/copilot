# Frontend README for GraphQL React App

# GraphQL React App

This is a React application that utilizes GraphQL for data fetching. The application is structured to separate concerns between the frontend and backend, allowing for a clean and maintainable codebase.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

```bash
npm start
```

This will launch the application in your default web browser at `http://localhost:3000`.

### Building for Production

To create a production build of the application, run:

```bash
npm run build
```

This will generate a `build` directory with the optimized production files.

## Usage

The main component of the application is located in `src/App.jsx`. This component integrates the GraphQL client and sets up the application structure.

You can find reusable components in the `src/components` directory. The `ExampleComponent.jsx` demonstrates how to use GraphQL queries to fetch and display data.

GraphQL queries are defined in `src/graphql/queries.js`. You can modify or add new queries as needed for your application.

## Running Tests

To run the Playwright tests, navigate to the `tests` directory and execute:

```bash
npx playwright test
```

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.