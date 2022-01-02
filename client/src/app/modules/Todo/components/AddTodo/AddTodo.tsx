import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react';
import { useMutation } from '@apollo/client';

import './AddTodo.scss';
import { Dispatch } from 'app/core/store';
import { CREATE_TODO } from '../../graphql';

const AddTodo: React.FC = () => {
  const [label, setLabel] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch<Dispatch>();
  const labelInput = useRef<HTMLInputElement>(null);
  const [createTodo, { loading, error: createError }] = useMutation(
    CREATE_TODO,
    {
      variables: {
        label,
      },
    },
  );

  const handleChangeLabel = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setLabel(event.target.value),
    [setLabel],
  );
  const handleFormSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (label.trim() === '') {
        setError(true);
        return;
      }

      labelInput.current?.focus();

      const resp = await createTodo();

      if (resp.data.createTodo) {
        dispatch.todo.add(resp.data.createTodo);
        setLabel('');
        setError(false);
      }
    },
    [createTodo, dispatch, label, labelInput, setError],
  );

  return (
    <form onSubmit={handleFormSubmit}>
      <FormControl isInvalid={error}>
        <InputGroup>
          <Input
            pr="4.5rem"
            isInvalid={error}
            errorBorderColor="crimson"
            placeholder="Type some label, then hit ENTER or click the Add button"
            value={label}
            onChange={handleChangeLabel}
            ref={labelInput}
            disabled={loading}
          />
          <InputRightElement
            width="4.5rem"
            children={
              <Button
                size="sm"
                colorScheme="teal"
                type="submit"
                disabled={loading}
              >
                {!loading && 'Add'}
                {loading && <Spinner size="sm" />}
              </Button>
            }
          />
        </InputGroup>
        <FormErrorMessage>Enter some label.</FormErrorMessage>
      </FormControl>
      {createError && (
        <p className="error">Oops, an error occurred. Please try again.</p>
      )}
    </form>
  );
};

export default AddTodo;
