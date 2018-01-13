import React, { Component } from 'react';
import '../../styles/App.css';
import Home from '../Home'

class App extends Component {
  render() {

    return (
    <div className="App">
      <div className="container mt-4">
      <Home/>
      </div>
    </div>
  )
  }
}

export default App;
