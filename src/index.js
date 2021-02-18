import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  StateProvider
} from './state/stateProvider';
import reducer, { initialState } from './state/reducer';

ReactDOM.render(
  <StateProvider reducer={reducer} initialState={initialState} >
    <App />
  </StateProvider>
  ,
  document.getElementById('root'),
)