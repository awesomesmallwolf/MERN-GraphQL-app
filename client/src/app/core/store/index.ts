import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import selectPlugin from '@rematch/select';
import { logger } from 'redux-logger';

import { models, RootModel } from './models';

const isDevEnv = process.env.NODE_ENV === 'development';
const middlewares = [];

if (isDevEnv) {
  middlewares.push(logger);
}

export const store = init<RootModel>({
  models,
  plugins: [selectPlugin()],
  redux: {
    devtoolOptions: isDevEnv
      ? {
          actionSanitizer: (action) => action,
        }
      : {
          disabled: true,
        },
    middlewares,
  },
});
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
