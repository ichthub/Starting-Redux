import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import ResultReducer from './Store/Counters/result';
import CounterReducer from './Store/Counters/counter';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//merge the two reducers into one
const rootReducer = combineReducers({
  ctr: CounterReducer,
  res: ResultReducer
});

const mystore = createStore(rootReducer);
//provider is a helper component which will help to inject our store into react component
ReactDOM.render(<Provider store = {mystore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
