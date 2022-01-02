import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import { Dispatch } from 'app/store';

const AddTodo: React.FC = () => {
  const [label, setLabel] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch<Dispatch>();
  const labelInput = useRef<HTMLInputElement>(null);

  const handleChangeLabel = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setLabel(event.target.value),
    [setLabel],
  );
  const handleFormSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setError(false);

      if (label.trim() === '') {
        setError(true);
        return;
      }

      dispatch.todo.add({
        id: `${new Date().getTime()}`,
        label,
        created: new Date().getTime(),
      });

      setLabel('');

      labelInput.current?.focus();
    },
    [dispatch, label, labelInput, setError],
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
          />
          <FormErrorMessage>Enter some label.</FormErrorMessage>
          <InputRightElement
            width="4.5rem"
            children={
              <Button size="sm" colorScheme="teal" type="submit">
                Add
              </Button>
            }
          />
        </InputGroup>
      </FormControl>
    </form>
  );
};

export default AddTodo;
