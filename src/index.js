import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';

const estadoInisial =
    {
        text: 'inicial'
    };

const reducer = (state,action) => {
  switch (action.type) {
    case "CAMBIAR":
      return {text: action.text}
      break;
    default:
      return state;

  }
}


const store = createStore(
  reducer,
  estadoInisial,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
