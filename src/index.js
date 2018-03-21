import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import ResultReducer from './Store/Counters/result';
import CounterReducer from './Store/Counters/counter';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//create middleware
const logger = (store) => {
  return next => {
    return action => {
      console.log('MiddleWare Dispatching ', action);
      const result = next(action);
      console.log('MiddleWare next state ', store.getState());
      return result;
    }
  }
};

//merge the two reducers into one
const rootReducer = combineReducers({
  ctr: CounterReducer,
  res: ResultReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//pass logger to middleware
const mystore = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));
//provider is a helper component which will help to inject our store into react component
ReactDOM.render(<Provider store = {mystore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
