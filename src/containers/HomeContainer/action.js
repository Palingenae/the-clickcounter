import { INCREMENT, DECREMENT } from '../../utils/constants';

export function incrementAction() {
  return {
    type: INCREMENT,
  };
}

export function decrementAction() {
  return {
    type: DECREMENT,
  }
}