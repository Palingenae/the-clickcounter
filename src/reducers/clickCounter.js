import { INCREMENT, DECREMENT } from '../utils/constants';

export const initialState = {
  counter: 0,
};

export default function clickCounterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : state.counter
        }
    default:
      return state;
  }
}
