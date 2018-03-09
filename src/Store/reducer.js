const intiatState = {
  counter: 0
}
const reducer = (state = intiatState, action) => {
  switch (action.type) {
    case 'INCREMENT':
        return {
          counter: state.counter + 1
        }
      //break; no need to break beacuse return exits the fun
    case 'DECREMENT':
        return {
          counter: state.counter - 1
        }
    case 'ADD':
        return {
          counter: state.counter + action.val
        }
    case 'SUBTRACT':
        return {
          counter: state.counter - action.val
        }
    default:
  }

  return state;
};

export default reducer;
