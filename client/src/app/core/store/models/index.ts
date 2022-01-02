import { Models } from '@rematch/core';

import { todo } from './todo';

export interface RootModel extends Models<RootModel> {
  todo: typeof todo;
}

export const models: RootModel = { todo };
