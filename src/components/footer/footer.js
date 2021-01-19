import React from 'react';
import TasksFilter from '../tasks-filter';
import PropTypes from 'prop-types';

const Footer = ({ done, onButtonAll, onButtonActive, onButtonCompleted, onButtonClearAll }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{done} items left</span>
      <TasksFilter
        onButtonAll={() => onButtonAll()}
        onButtonActive={() => onButtonActive()}
        onButtonCompleted={() => onButtonCompleted()}
      />
      <button className="clear-completed" onClick={onButtonClearAll}>Clear completed</button>
    </footer>
  );
}

Footer.defaultProps = {
  onButtonAll: () => {},
  onButtonActive: () => {},
  onButtonCompleted: () => {},
  onButtonClearAll: () => {}
}

Footer.propTypes = {
  done: PropTypes.number,
  onButtonAll: PropTypes.func,
  onButtonActive: PropTypes.func,
  onButtonCompleted: PropTypes.func,
  onButtonClearAll: PropTypes.func
}

export default Footer;