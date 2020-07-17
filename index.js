import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Blog extends Component{
  constructor(props) {
    super(props);
    this.state = {
      articles:[]
    };
  }
  componentDidMount(){
  //console.log("Estoy aqui");
  let promesa=fetch('https://jsonplaceholder.typicode.com/posts');
  promesa.then(res=>res.json()).then(data=>{
    //console.log(data);
    this.setState({
      articles:data
    })
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
        this.state.articles.map((article)=>{
          return <div className="card" style={{ backgroundColor:'red',color:'yellow' }}><p>{article.title}</p></div>
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
