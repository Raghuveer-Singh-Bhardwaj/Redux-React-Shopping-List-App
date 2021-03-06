import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import ItemStore from './ItemStore';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <Provider store={ItemStore}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
