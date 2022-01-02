import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { TodoItem } from 'app/store/models/todo';
import { ListItem } from '@chakra-ui/react';

const TodoListItem: React.FC<TodoItem> = (todoItem) => (
  <ListItem>
    <Flex align="center">
      <Box>{todoItem.label}</Box>
    </Flex>
  </ListItem>
);

export default TodoListItem;
