import React from 'react';
import { Container, Stack } from '@chakra-ui/react';

import './App.scss';
import { AddTodo, TodoList } from 'app/modules/Todo';

const App: React.FC = () => (
  <Container className="app-main-container">
    <Stack spacing={5}>
      <AddTodo />
      <TodoList />
    </Stack>
  </Container>
);

export default App;
