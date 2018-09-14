import React from 'react';


export default class Menu extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      condition:false
    }

  }

  create = () => {
    this.setState({
      condition: !this.state.create
    })
  };


  render() {
    return(
      <div>
        <div className="menu">
          <div className="controls">
            <button className="button"><img src={ require("./icons/plus-button.png") } alt="Create" onClick={this.create.bind(this)} className="create"/></button>
            <button className="button"><img src={ require("./icons/new-task.png") } alt="Edit" onClick={this.edit} className="create"/></button>
            <button className="button"><img src={ require("./icons/trash.png") } alt="delete" onClick={this.delete} className="create"/></button>
          </div>
        </div>
      </div>
    );
  }
};
