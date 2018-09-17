import React from 'react';


export default class Createtkt extends React.Component {
constructor(props){
  super(props)
  this.state = {
    condition:true,
    data:["take out trash", "feed dog"]
  }
}

createTkt = () =>{
  this.setState({
      condition : !this.state.condition
  })
};

handleChange(event){
  this.setState({
    data:event.target.value
  });
}




  render() {
    let slide= this.state.condition ? "slideout slidein" : "slideout";
    let hide = this.state.condition ? "hide" : "";

    return(
    <div>

      <div className="menu">
        <div className="controls">
          <button className="button"><img src={ require("./icons/plus-button.png") } alt="Create" onClick={this.createTkt.bind(this)} className="create"/></button>
          <button className="button"><img src={ require("./icons/new-task.png") } alt="Edit" onClick={this.edit} className="create"/></button>
          <button className="button"><img src={ require("./icons/trash.png") } alt="delete" onClick={this.delete} className="create"/></button>
        </div>
      </div>

      <div className={slide}>
        <div className={hide}>
        <h2 className="newtask">New Task</h2>

        <div className="boxes">
          <input value={this.state.name} className = "name" placeholder="Franchisee name" />

          <input value={this.state.number} placeholder="number" />

          <input value={this.state.task} className="taskinput" placeholder="EnterTask" />

        </div>
          <button className="submit" onClick={this.handleChange.bind(this)}>Create</button>
      </div>
      </div>
      <div className="canvas">
      {this.state.data.map((i) =>{
        return <div className="tkt"><h2 className="todo">{i}</h2><button>Done</button></div>
      })}
      </div>
    </div>
    );
  }
};
