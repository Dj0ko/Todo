import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  state = {
    label: '',
    minutes: '',
    seconds: '',
  };

  onLabelChange = (evt) => {
    const { name } = evt.target;

    this.setState({
      [name]: evt.target.value,
    });
  };

  onSubmit = (evt) => {
    evt.preventDefault();
    const { label, minutes, seconds } = this.state;
    const { onItemAdded } = this.props;
    onItemAdded(label, minutes, seconds);
    this.setState({
      label: '',
      minutes: '',
      seconds: '',
    });
  };

  render() {
    const { label, minutes, seconds } = this.state;

    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="label"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onLabelChange}
          value={label}
        />
        <input
          type="text"
          name="minutes"
          className="new-todo-form__timer"
          placeholder="Min"
          value={minutes}
          onChange={this.onLabelChange}
        />
        <input
          type="text"
          name="seconds"
          className="new-todo-form__timer"
          placeholder="Sec"
          value={seconds}
          onChange={this.onLabelChange}
        />
        <input type="submit" className="hidden" />
      </form>
    );
  }
}

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired,
};
