import * as actionTypes from '../actions'; // import everything in actions.js and put it in obj actionTypes
//actionTypes is an obj
const intiatState = {
  counter: 0,
};

const CounterReducer = (state = intiatState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
        return {
          ...state,
          counter: state.counter + 1
        }
    case actionTypes.DECREMENT:
        return {
          ...state,
          counter: state.counter - 1
        }
    case actionTypes.ADD:
        return {
          ...state,
          counter: state.counter + action.val
        }
    case actionTypes.SUBTRACT:
        return {
          ...state,
          counter: state.counter - action.val
        }

    default:
  }

  return state;
};

export default CounterReducer;
