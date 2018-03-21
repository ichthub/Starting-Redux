import * as actionTypes from './actionTypes';


/***************dispatch actions asynch**************/
export const saveRes = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
};
export const storedResults = (res) =>{
  return (dispatch, getState) => {//abled by redux-thunk
    setTimeout(() => {
      //const oldCounter = getState().ctr.counter; //getting the this.state.
      //console.log(oldCounter);
      dispatch(saveRes(res));
    }, 2000);
  };

};
/***************************************************/
export const deleteResult = (resultId) =>{
  return {
    type: actionTypes.DELETE_RESULT,
    id:resultId
  };
};
