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

export const DELETE_TODO = gql`
  mutation Mutation($id: String!) {
    deleteTodo(id: $id) {
      id
      label
    }
  }
`;
