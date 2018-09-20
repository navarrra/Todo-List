import React from 'react';


export default class Createtkt extends React.Component {
constructor(props){
  super(props)
  this.state = {
    condition:true,
    data:[],
    textvalue : ""
  }
  this.handleNew = this.handleNew.bind(this)
  this.handleChange = this.handleChange.bind(this)
  this.createTkt = this.createTkt.bind(this)
  this.delete = this.delete.bind(this)
}

createTkt = () =>{
  this.setState({
    condition : !this.state.condition
  })
};

handleNew(e){
  this.setState({
    textvalue:e.target.value,

  })
}

handleChange(){
  this.state.data.push(this.state.textvalue)

  this.setState({
    condition : !this.state.condition
  })
}

delete(i){
  for(let v = 0; v<this.state.data.length; v++){
    if(this.state.data[v]===i){
      delete this.state.data[v]
    }
  };
  this.setState({
    value: this.state.data
  })
}




  render() {
    let slide= this.state.condition ? "slideout slidein" : "slideout";
    let hide = this.state.condition ? "hide" : "";
    return(
    <div>

      <div className="menu">
        <div className="controls">
          <button className="button"><img src={ require("./icons/plus-button.png") } alt="Create" onClick={this.createTkt} className="create"/></button>

        </div>
      </div>

      <div className={slide}>
        <div className={hide}>
        <h2 className="newtask">New Task</h2>

        <div className="boxes">
          <input onChange={this.handleNew} className="taskinput" placeholder="EnterTask" />

        </div>
          <button className="submit" onClick={this.handleChange}>Create</button>
      </div>
      </div>
      <div className="canvas">
      {this.state.data.map((i) =>{
        return <div className="tkt"><h2 className="todo">{i}</h2><button onClick={this.delete.bind(this, i)}>done</button></div>
      })}
      </div>
    </div>
    );
  }
};
