/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { routerMiddleware } from 'connected-react-router';
import { createRouterMiddleware } from '@lagunovsky/redux-react-router';
import createReducer from '../reducers/root';

export default function configureStore(initialState = {}, history) {
  const reduxSagaMonitorOptions = {};

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  // In case you want to inject more middleware
  const middlewares = [sagaMiddleware, createRouterMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  /* eslint-enable */
  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
    // eslint-disable-next-line no-underscore-dangle
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  return store;
}
