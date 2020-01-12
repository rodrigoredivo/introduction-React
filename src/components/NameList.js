import React, { Component } from 'react';

class Namelist extends Component {
  state = {
    newName: '',
    name: [
      'Nodejs',
      'Php',
      'Java',
      'Python'
    ]
  };

  handleInputChange = e => {
    this.setState({ newName: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      name: [...this.state.name, this.state.newName],
      newName: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.name.map(name => <li key={name}>{name}</li>)}
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newName}
        />
        <button type="submit">Adicionar</button>
      </form>
    );
  }
};

export default Namelist;