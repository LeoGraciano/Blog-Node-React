import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'



class App extends Component {
  constructor(props) {
    super(props)
    axios
      .get('/api/postagens')
      .then(resultado => {
        console.log(resultado);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img className="App-logo" src={logo} alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload
        </p>
      </div>
    )
  }
}

export default App;