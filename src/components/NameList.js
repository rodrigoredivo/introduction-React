import React, { Component } from 'react';
import NameItem  from './NameItem';

class Namelist extends Component {
  state = {
    newName: '',
    name: []
  };

  // Executed as soon as component appears on screen
  componentDidMount() {
    const name = localStorage.getItem('name');

    if( name ) {
      this.setState({ name: JSON.parse(name) });
    }
  }

  // Runs whenever props or state changes
  componentDidUpdate (_, prevState){
    if(prevState.name !== this.state.name) {
      localStorage.setItem('name', JSON.stringify(this.state.name));
    }
  }

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

  handleDelete = (names) => {
    this.setState({ name: this.state.name.filter(n => n !== names )});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.name.map(names => 
            <NameItem 
              key={names} 
              names={names} 
              onDelete={() => this.handleDelete (names)}
            /> 
          )}
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