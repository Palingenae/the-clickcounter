/**
 * Create the store with dynamic reducers
 */

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createRouterMiddleware } from '@lagunovsky/redux-react-router';
import createRootReducer from '../reducers/root';

export default function createStore(initialState = {}, injectedReducers = {}, history) {
  const reduxSagaMonitorOptions = {};
  
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  
  const middlewares = [sagaMiddleware, createRouterMiddleware(history)];

  const store = configureStore({
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware(middlewares).concat(createRouterMiddleware(history)),
    reducer: createRootReducer({injectedReducers}),
  
    initialState
  });

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  return store;
}
