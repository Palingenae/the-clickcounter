/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux';
import counterReducer from './clickCounter';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
function createRootReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    counter: counterReducer,
    ...injectedReducers,
  });

  return rootReducer;
}

export default createRootReducer;