import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Flex,
  Icon,
  IconButton,
  ListItem,
  Spacer,
} from '@chakra-ui/react';
import { RiDeleteBin7Line } from 'react-icons/ri';

import { TodoItem } from 'app/store/models/todo';
import { Dispatch } from 'app/store';

const TodoListItem: React.FC<TodoItem> = (todoItem) => {
  const dispatch = useDispatch<Dispatch>();

  const handleDeleteTodo = useCallback(
    () => dispatch.todo.delete(todoItem.id),
    [dispatch, todoItem],
  );

  return (
    <ListItem>
      <Flex align="center">
        <Box mr="2rem">{todoItem.label}</Box>

        <Spacer />

        <Box>
          <IconButton
            colorScheme="red"
            variant="outline"
            aria-label="Delete todo"
            size="xs"
            icon={<Icon as={RiDeleteBin7Line} />}
            onClick={handleDeleteTodo}
          />
        </Box>
      </Flex>
    </ListItem>
  );
};

export default TodoListItem;
