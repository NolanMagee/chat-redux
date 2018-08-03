import React, { Component } from 'react';
import './App.css';
import {Sidebar} from './containers/Sidebar'
import {AddMessage} from './containers/AddMessage'
import {MessagesList} from './containers/MessagesList'

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id ="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
