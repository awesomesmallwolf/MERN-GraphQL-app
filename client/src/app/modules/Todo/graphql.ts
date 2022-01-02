import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  {
    getTodos {
      id
      label
    }
  }
`;

export const CREATE_TODO = gql`
  mutation Mutation($label: String!) {
    createTodo(label: $label) {
      id
      label
    }
  }
`;
