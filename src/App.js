import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo'

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <h1>Todo List</h1>
        
        <AddTodo/>
      </div>
    );
  }
}

export default App;






