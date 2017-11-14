import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css'
import './styles/index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './state/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
