import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {todos : ['Eat Subs', 'Fuck girls', 'Sleep well']};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div id="todo-list">
          <h2>My To Do List - Viraj</h2>
          <ul>
            <li>{this.state.todos[0]}</li>
            <li>{this.state.todos[1]}</li>
            <li>{this.state.todos[2]}</li>
          </ul>
        </div>
      </div>
    );
  } // render
}

export default App;
