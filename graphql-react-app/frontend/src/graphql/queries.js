import { gql } from '@apollo/client';

export const GET_EXAMPLE_DATA = gql`
  query GetExampleData {
    exampleData {
      id
      name
      description
    }
  }
`;