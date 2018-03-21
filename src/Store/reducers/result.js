import * as actionTypes from '../actions/actionTypes';
import {updateObj} from '../utility';

const intiatState = {
  results: []
};

const ResultReducer = (state = intiatState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
        return (updateObj(state, {results : state.results.concat({id: new Date(), value : action.result})}));
    case actionTypes.DELETE_RESULT:
      const updatArr = state.results.filter(ele => ele.id !== action.id )
      return (updateObj(state, {results : updatArr}));
    default:
  }
  return state;
};

export default ResultReducer;
