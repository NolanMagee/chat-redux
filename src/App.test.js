import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import chat from './reducers/index';
import {createStore} from 'redux';


it('renders without crashing', () => {
  expect(1+1).toEqual(2);
});
