import React, { Component } from 'react';

export default class Cell extends Component {
  
  state = {
    color: this.props.color,
    newColor: this.props.newColor
  }

  changeColor = () => {
    let newColor = this.props.newColor;
    this.setState({
      color: newColor
    })
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor} >
      </div>
    )
  }
  
}
