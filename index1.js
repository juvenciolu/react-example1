import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function MiComponente(){
  return <p> Hola Mundo</p>;
}


function A(props){
  return <p> Hola { props.nombre }</p>;
}
function B(props){
  return <p> { props.nombre }:10</p>;
}

class MiComponenteClase extends Component{
  render(){
    return <p>Hola soy de la clase</p>;
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let nombre ="Juvencio";
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start curso introductorio :)
        </p>
      < MiComponente/>
      < MiComponenteClase/>
      <A nombre={nombre}/>
      <B nombre={nombre}/>

      </div>
    );
  }
}
 
render(<App />, document.getElementById('root'));
