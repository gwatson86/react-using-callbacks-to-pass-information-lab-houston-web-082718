import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  state = {
    color: "#F00"
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} newColor={this.state.color} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  changeColor = color => {
    this.setState({ color })
  }

  render() {
    console.log(this.state.color)
    return (
      <div id="app">
        <ColorSelector changeColor={this.changeColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
