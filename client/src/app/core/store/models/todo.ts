import { createModel } from '@rematch/core';

import type { RootModel } from '.';

export interface TodoItem {
  id: string;
  label: string;
  created: number;
  done?: boolean;
}

export const todo = createModel<RootModel>()({
  name: 'todo',
  state: [] as TodoItem[],
  reducers: {
    add(state, todo: TodoItem): TodoItem[] {
      return [...state, todo];
    },
    addTodos(state, todos: TodoItem[]): TodoItem[] {
      return [...state, ...todos];
    },
    delete(state, id: TodoItem['id']): TodoItem[] {
      return state.filter((item) => item.id !== id);
    },
  },
  selectors: (slice) => ({
    todoList() {
      return slice;
    },
  }),
});
