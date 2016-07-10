import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import ReduxToastr from 'react-redux-toastr'

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <App />
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        position="top-left" />
    </div>
  </Provider>
  , document.querySelector('.container'));
