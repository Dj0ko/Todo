import React from 'react';
import TasksFilter from '../tasks-filter';

const Footer = ({done}) => {
  return (
    <footer className="footer">
      <span className="todo-count">{done} items left</span>
      <TasksFilter />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;