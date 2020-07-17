import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Blog extends Component{
  constructor(props) {
    super(props);
    this.state = {
      articles:[
        'Mi primer componente en React',
        'Intro to react',
        'Que es React?'
      ]
    }
  }
  componentDidMount(){
  //console.log("Estoy aqui");
  let promesa=fetch('https://jsonplaceholder.typicode.com/posts');
  promesa.then(res=>res.json()).then(data=>{
    console.log(data);
  })

/*  o podria ser asi..
  promesa.then((res)=>{
    res.json().then((data)=>{
      console.log(data);
    })
  })*/

}
  render(){
    return (
      <div>
      <h1>Mis Articulos</h1>
      {
        this.state.articles.map((title)=>{
          return <p>{title}</p>
        })
      }
      </div>
    )
  }
}




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
        <Blog />

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
