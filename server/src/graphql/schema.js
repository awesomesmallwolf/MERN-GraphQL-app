import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Date

  type Todo {
    id: String!
    label: String!
    created: Date!
  }

  type Query {
    getTodos: [Todo!]!
  }

  type Mutation {
    createTodo(label: String!): Todo!
    deleteTodo(id: String!): Todo
  }
`;

export default typeDefs;
