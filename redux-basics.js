const redux= require('redux');
const createStore = redux.createStore;
const intialiseState = {
  counter:0
}
//Reducer: only thing which update state
const rootReducer = (state = intialiseState, action) => { //any reducer get two args: the old state and action
  if(action.type === 'INC_COUNTER'){
    return {
      ...state,
      counter : state.counter + 1
    };
  }
  if(action.type === 'ADD_COUNTER'){
    return {
      ...state,
      counter : state.counter + action.value
    };
  }
  return state; //return the updated state
};

// Store
const store = createStore(rootReducer); //our store is now made with our reducer
console.log('first log', store.getState());

//Subscription : getting trigered whenever the state is updated
store.subscribe(() => {
  console.log('[Subscription]', store.getState());
});

//Dispatching Action:
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER' , value: 10});
console.log('second log', store.getState());
