import React from 'react';
import PropTypes from 'prop-types';

const TasksFilter = ({ onButtonAll, onButtonActive, onButtonCompleted }) => (
  <ul className="filters">
    <li>
      <button type="button" className="selected" onClick={onButtonAll}>
        All
      </button>
    </li>
    <li>
      <button type="button" onClick={onButtonActive}>
        Active
      </button>
    </li>
    <li>
      <button type="button" onClick={onButtonCompleted}>
        Completed
      </button>
    </li>
  </ul>
);

TasksFilter.defaultProps = {
  onButtonAll: () => {},
  onButtonActive: () => {},
  onButtonCompleted: () => {},
};

TasksFilter.propTypes = {
  onButtonAll: PropTypes.func,
  onButtonActive: PropTypes.func,
  onButtonCompleted: PropTypes.func,
};

export default TasksFilter;
