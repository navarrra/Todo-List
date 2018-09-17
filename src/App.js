import React, { Component } from 'react';
import './App.css';
import Layout from "./components/layout.js";
import Title from './components/title.js';
import Createtkt from './components/createtkt.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
          <Layout />
              <Title />
            <Createtkt />
        </div>
      </div>
    );
  }
}

export default App;
