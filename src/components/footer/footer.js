import React from 'react';
import TasksFilter from '../tasks-filter';

const Footer = ({ done, onToggleAll, onToggleActive, onToggleCompleted, onToggleClearAll }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{done} items left</span>
      <TasksFilter
        onToggleAll={() => onToggleAll()}
        onToggleActive={() => onToggleActive()}
        onToggleCompleted={() => onToggleCompleted()}
      />
      <button className="clear-completed" onClick={onToggleClearAll}>Clear completed</button>
    </footer>
  );
}

export default Footer;