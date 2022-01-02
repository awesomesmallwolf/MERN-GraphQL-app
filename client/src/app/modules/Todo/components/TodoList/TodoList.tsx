import React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@chakra-ui/react';

import { store } from 'app/store';
import { TodoListItem } from '../TodoListItem';

const TodoList: React.FC = () => {
  const todoList = useSelector(store.select.todo.todoList);

  return (
    <>
      {todoList.length === 0 && <p>No TODOs</p>}

      <List spacing={3}>
        {todoList.map((item) => (
          <TodoListItem key={item.id} {...item} />
        ))}
      </List>
    </>
  );
};

export default TodoList;
