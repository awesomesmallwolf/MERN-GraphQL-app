import React from 'react';
import { Container, Stack } from '@chakra-ui/react';

import './App.scss';
import { AddTodo } from 'app/modules/Todo/components/AddTodo';
import { TodoList } from 'app/modules/Todo/components/TodoList';

const App: React.FC = () => (
  <Container className="app-main-container">
    <Stack spacing={5}>
      <AddTodo />
      <TodoList />
    </Stack>
  </Container>
);

export default App;
