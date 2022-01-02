import React from 'react';
import { Container, Stack } from '@chakra-ui/react';

import './App.scss';
import { AddTodo } from 'app/modules/Todo/components/AddTodo';

const App: React.FC = () => (
  <Container className="app-main-container">
    <Stack spacing={5}>
      <AddTodo />
    </Stack>
  </Container>
);

export default App;
