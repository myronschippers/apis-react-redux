import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const creatureList = (state = ['Dragon'], action) => {
  if (action.type === 'ADD_CREATURE_TO_LIST') {
    return [
      ...state,
      action.payload.creature
    ]
  }

  return state;
}

const defaultSecond = { message: 'not updated' };
const secondReducer = (state = {}, action) => {
  if (action.type === 'SECOND') {
    console.log('Second reducer is BETTER!!!');
    return {
      message: 'I am the SECOND',
    }
  }
  return state;
}

const storeInstance = createStore(
  combineReducers(
    {
      creatureList,
      secondReducer
    }
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
