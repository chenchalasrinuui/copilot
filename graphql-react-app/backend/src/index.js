const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema/typeDefs');
const { resolvers } = require('./resolvers');
const mongoose = require('mongoose');

const startServer = async () => {
    // Connect to the database
    await mongoose.connect('mongodb://localhost:27017/graphql-react-app', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // Create Apollo Server
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    // Start the server
    const { url } = await server.listen();
    console.log(`🚀 Server ready at ${url}`);
};

startServer().catch(error => {
    console.error('Error starting the server:', error);
});