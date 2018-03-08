const redux= require('redux');
const createStore = redux.createStore;
const intialiseState = {
  counter = 0
}
//Reducer: only thing which update state
const rootReducer = (state = intialiseState, action) => { //any reducer get two args: the old state and action
  return state; //return the updated state
};

// Store
const store = createStore(rootReducer); //our store is now made with our reducer
console.log(store.getState());

//Dispatching Action



//Subscription
