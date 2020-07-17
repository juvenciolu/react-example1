import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Contador from './Contador';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Juvencio'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Contador/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
