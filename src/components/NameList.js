import React, { Component } from 'react';

class Namelist extends Component {
  state = {
    name: [
      'Nodejs',
      'Php',
      'Java',
      'Python'
    ]
  };

  render() {

    console.log(this.state);

    return (
      <ul>
        <li>Nodejs</li>
        <li>Php</li>
        <li>Java</li>
        <li>Python</li>
      </ul>
    );
  }
};

export default Namelist;