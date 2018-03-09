import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './Store/reducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const mystore = createStore(reducer);
//provider is a helper component which will help to inject our store into react component
ReactDOM.render(<Provider store = {mystore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
