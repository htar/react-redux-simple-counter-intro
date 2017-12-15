import React, { Component } from 'react';
class Field extends Component {
    // constructor() {
    //   super()
    // }
    render() {
      console.log(this.props,this.state)
      return (
        <p> {this.props.value}</p>
      )
    }
  }

export default Field