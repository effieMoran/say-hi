import React, { Component } from 'react';
import logo from '../../styles/logo.svg';
import '../../styles/App.css';
import {Form} from '../'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Ejercicio</h1>
        </header>
        <p className="App-intro">
          Nombre <code>nombre</code>.
        </p>
      </div>
    );
  }
}

export default App;
