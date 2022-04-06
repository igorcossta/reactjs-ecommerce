import {
  createStore,
  applyMiddleware,
  compose,
  AnyAction,
  Middleware,
} from 'redux';
import logger from 'redux-logger';
import thunk, { ThunkDispatch } from 'redux-thunk';

import rootReducer from './root-reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composedEnhancers = compose(applyMiddleware(...middlewares));

const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);

export default store;
export type RootState = ReturnType<typeof store.getState>;
// https://github.com/reduxjs/redux-toolkit/issues/587
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;
