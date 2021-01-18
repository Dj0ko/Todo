import React from 'react';

const TasksFilter = ({ onToggleAll, onToggleActive, onToggleCompleted }) => {
  return (
    <ul className="filters">
      <li>
        <button className="selected" onClick={onToggleAll}>All</button>
      </li>
      <li>
        <button onClick={onToggleActive}>Active</button>
      </li>
      <li>
        <button onClick={onToggleCompleted}>Completed</button>
      </li>
    </ul>
  );
}

export default TasksFilter;