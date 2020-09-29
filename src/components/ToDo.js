import React, { Component } from 'react';
import { toggleComplete } from '../actions';
import { connect } from 'react-redux';

class ToDo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li>{props.todo}</li>
    )
  }
}

export default ToDo;
