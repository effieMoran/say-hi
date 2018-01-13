import React, { Component } from 'react';
import '../../styles/App.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Buenas ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <select>
          <option value="volvo">Argentina</option>
          <option value="saab">Italia</option>
          <option value="mercedes">Brasil</option>
          <option value="audi">Otro...</option>
        </select>
        <br/>
        <input type="submit" value="Saludar" />
      </form>
    );
  }
}

export default Form;
