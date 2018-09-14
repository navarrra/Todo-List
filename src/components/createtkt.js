import React from 'react';
import Menu from '../components/menu.js'


export default class Createtkt extends React.Component {
constructor(props){
  super(props)
  this.state = {
    condition:false

  }

}

createTkt = () =>{
  this.setState({
      condition : !this.state.condition
  })
};

menuBtn = () =>{
  console.log("hello");
  this.setState({
    condition: this.state.condition
  })
};

  render() {
    let slide= this.state.condition ? "slideout slidein" : "slideout";
    let hide = this.state.condition ? "hide" : "";

    return(
    <div>
    <Menu />
      <div className={slide}>
        <div className={hide}>
        <h2 className="newtask">New Task</h2>

        <div className="boxes">
          <input placeholder="Franchisee name" />

          <input placeholder="Franchisee number" />

          <input className="taskinput" placeholder="EnterTask" />

        </div>
          <button className="submit" onClick={this.createTkt.bind(this)}>Create</button>
      </div>
      </div>
    </div>
    );
  }
};
