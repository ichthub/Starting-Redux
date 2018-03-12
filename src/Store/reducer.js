const intiatState = {
  counter: 0,
  results: []
}
const reducer = (state = intiatState, action) => {
  switch (action.type) {
    case 'INCREMENT':
    //updtae state immutably
    /*
      const newState = Object.assign({} , state)
      newState.counter = state.counter;
      //another way is just spread it
      ...stats
    */
        return {
          ...state,
          counter: state.counter + 1
        }
      //break; no need to break beacuse return exits the fun
    case 'DECREMENT':
        return {
          ...state,
          counter: state.counter - 1
        }
    case 'ADD':
        return {
          ...state,
          counter: state.counter + action.val
        }
    case 'SUBTRACT':
        return {
          ...state,
          counter: state.counter - action.val
        }
    case 'STORE_RESULT':
        return {
          //update array immutably by use of concat
          ...state,
          results : state.results.concat({id: new Date(), value : state.counter})
        }
    case 'DELETE_RESULT':
        return {
          ...state,

        }
    default:
  }

  return state;
};

export default reducer;
