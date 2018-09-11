import React, { Component } from 'react';
import './App.css';
import Menu from "./components/menu.js";
import Table from "./components/table.js";
import Layout from "./components/layout.js";
import Title from './components/title.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="background">
          <Layout/>
            <Menu />
              <Table/>
              <Title />
        </div>
      </div>
    );
  }
}

export default App;
