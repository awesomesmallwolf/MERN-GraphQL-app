import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Flex,
  Icon,
  IconButton,
  ListItem,
  Spacer,
  Spinner,
} from '@chakra-ui/react';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { useMutation } from '@apollo/client';

import { TodoItem } from 'app/core/store/models/todo';
import { Dispatch } from 'app/core/store';
import { DELETE_TODO } from '../../graphql';

const TodoListItem: React.FC<TodoItem> = (todoItem) => {
  const dispatch = useDispatch<Dispatch>();
  const [deleteTodo, { loading }] = useMutation(DELETE_TODO);

  const handleDeleteTodo = useCallback(async () => {
    const resp = await deleteTodo({ variables: { id: todoItem.id } });

    if (resp.data.deleteTodo.id === todoItem.id) {
      dispatch.todo.delete(todoItem.id);
    }
  }, [deleteTodo, dispatch, todoItem]);

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
            icon={<Icon as={loading ? Spinner : RiDeleteBin7Line} />}
            onClick={handleDeleteTodo}
            disabled={loading}
          />
        </Box>
      </Flex>
    </ListItem>
  );
};

export default TodoListItem;
