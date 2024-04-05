// reducers.js
import { combineReducers } from 'redux';

// Define your reducers here
const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  count: countReducer,
});

export default rootReducer;