import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';

import { Dispatch, store } from 'app/core/store';
import { TodoListItem } from '../TodoListItem';
import { GET_TODOS } from '../../graphql';

const TodoList: React.FC = () => {
  const todoList = useSelector(store.select.todo.todoList);
  const dispatch = useDispatch<Dispatch>();
  const { error, data, loading } = useQuery(GET_TODOS);

  useEffect(() => {
    if (data) {
      dispatch.todo.addTodos(data.getTodos);
    }
  }, [data, dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}

      {todoList.length === 0 && !error && <p>No TODOs</p>}

      {error && <p>Oops, an error occurred. Please refresh the page.</p>}

      <List spacing={3}>
        {todoList.map((item) => (
          <TodoListItem key={item.id} {...item} />
        ))}
      </List>
    </>
  );
};

export default TodoList;
