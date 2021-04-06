import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ onItemAdded }) => {
  const initialState = {
    label: '',
    minutes: '',
    seconds: '',
  };

  const [dataState, setDataState] = useState(initialState);

  const { label, minutes, seconds } = dataState;

  const onLabelChange = (evt) => {
    const { name } = evt.target;

    setDataState((data) => ({ ...data, [name]: evt.target.value }));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    onItemAdded(label, minutes, seconds);
    setDataState(initialState);
  };

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="label"
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={onLabelChange}
        value={label}
      />
      <input
        type="text"
        name="minutes"
        className="new-todo-form__timer"
        placeholder="Min"
        value={minutes}
        onChange={onLabelChange}
      />
      <input
        type="text"
        name="seconds"
        className="new-todo-form__timer"
        placeholder="Sec"
        value={seconds}
        onChange={onLabelChange}
      />
      <input type="submit" className="hidden" />
    </form>
  );
};

export default NewTaskForm;

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired,
};
