import * as actionTypes from './actionTypes';

export const increament = () =>{
  return {
    type: actionTypes.INCREMENT
  };
};
export const decreament = () =>{
  return {
    type: actionTypes.DECREMENT
  };
};
export const add = (value) =>{
  return {
    type: actionTypes.ADD,
    val: value
  };
};
export const subtract = (value) =>{
  return {
    type: actionTypes.SUBTRACT,
    val: value
  };
};
