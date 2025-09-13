import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    hello: String
  }

  type Mutation {
    setMessage(message: String!): String
  }
`;

export default typeDefs;