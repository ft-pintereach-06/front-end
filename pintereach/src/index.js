import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleWare } from 'redux';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';

import './index.css';
import App from './App';

// const store = createStore(reducer, applyMiddleware(thunk, logger));

  // ReactDOM.render(
  //     <Provider store={store}>
  //         <App />
  //     </Provider>, 
  //     document.getElementById("root")
  // );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


