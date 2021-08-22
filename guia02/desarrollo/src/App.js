//import logo from './logo.svg';
//import Welcome from './components/Welcome';
import React from 'react';
import './App.css';
import Form from './components/Form';

const App = () => {
  
  return (
  <div className="App">
    <div className="App-content">
      <h3>
        Discusión de Resultados Guía 2
      </h3>
      <Form />
    </div>
  </div>
  );

}

export default App;

/*
handleOnClick(e) {
    this.setState({
      name: "Steven",
    });
  }
< Welcome handleOnClick={this.handleOnClick} name="" />
*/