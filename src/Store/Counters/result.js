import * as actionTypes from '../actions/actions';

const intiatState = {
  results: []
};

const ResultReducer = (state = intiatState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
        return {
          ...state,
          results : state.results.concat({id: new Date(), value : action.result})
        }
    case actionTypes.DELETE_RESULT:
      const updatArr = state.results.filter(ele => ele.id !== action.id )
        return {
          ...state,
          results:updatArr,
        }
    default:
  }

  return state;
};

export default ResultReducer;
