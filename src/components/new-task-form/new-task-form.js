import React, { Component } from 'react';

import './new-task-form.css';

export default class NewTaskForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (evt) => {
    this.setState({
      label: evt.target.value
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    })
  };

  render() {
    return (
      <form className="new-task-form" onSubmit={this.onSubmit}>
        <input type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          value={this.state.label}
          autoFocus />
      </form>
    )
  };
}