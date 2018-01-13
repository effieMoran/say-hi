import React, { Component } from 'react';
import logo from '../../styles/logo.svg';
import '../../styles/App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ejercicio Intive</h1>
        </header>
        <p className="App-intro">
          Bienvenido <code>src/App.js</code> 
        </p>
      </div>
    );
  }
}

export default Header;
