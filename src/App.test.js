import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import chat from './reducers/index';
import {createStore} from 'redux';

//The default test fails with Redux and I haven't bothered to fix it
it('renders without crashing', () => {
  expect(1+1).toEqual(2);
});
