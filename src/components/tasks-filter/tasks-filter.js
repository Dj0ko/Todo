import React from 'react';
import PropTypes from 'prop-types';

const TasksFilter = ({ onButtonAll, onButtonActive, onButtonCompleted }) => {
  return (
    <ul className="filters">
      <li>
        <button className="selected" onClick={onButtonAll}>All</button>
      </li>
      <li>
        <button onClick={onButtonActive}>Active</button>
      </li>
      <li>
        <button onClick={onButtonCompleted}>Completed</button>
      </li>
    </ul>
  );
}

TasksFilter.propTypes = {
  onButtonAll: PropTypes.func,
  onButtonActive: PropTypes.func,
  onButtonCompleted: PropTypes.func,
}

export default TasksFilter;