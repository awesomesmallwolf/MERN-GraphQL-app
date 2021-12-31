import { init } from '@rematch/core';
import selectPlugin from '@rematch/select';
import { logger } from 'redux-logger';

const isDevEnv = process.env.NODE_ENV === 'development';
const middlewares = [];

if (isDevEnv) {
  middlewares.push(logger);
}

export const store = init({
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
