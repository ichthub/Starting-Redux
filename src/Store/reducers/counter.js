import * as actionTypes from '../actions/actionTypes'; // import everything in actions.js and put it in obj actionTypes
//actionTypes is an obj
import {updateObj} from '../utility';
const intiatState = {
  counter: 0,
};

const CounterReducer = (state = intiatState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
        return updateObj(state , {counter: state.counter + 1});
    case actionTypes.DECREMENT:
        return updateObj(state , {counter: state.counter - 1});
    case actionTypes.ADD:
        return updateObj(state , {counter: state.counter + action.val});
    case actionTypes.SUBTRACT:
        return updateObj(state , {counter: state.counter - action.val});
    default:
  }

  return state;
};

export default CounterReducer;
