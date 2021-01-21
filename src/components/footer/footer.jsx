import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../tasks-filter/tasks-filter';

const Footer = ({ done, onButtonAll, onButtonActive, onButtonCompleted, onButtonClearAll }) => (
  <footer className="footer">
    <span className="todo-count">{done} items left</span>
    <TasksFilter
      onButtonAll={() => onButtonAll()}
      onButtonActive={() => onButtonActive()}
      onButtonCompleted={() => onButtonCompleted()}
    />
    <button type="button" className="clear-completed" onClick={onButtonClearAll}>
      Clear completed
    </button>
  </footer>
);

Footer.defaultProps = {
  done: '',
  onButtonAll: () => {},
  onButtonActive: () => {},
  onButtonCompleted: () => {},
  onButtonClearAll: () => {},
};

Footer.propTypes = {
  done: PropTypes.number,
  onButtonAll: PropTypes.func,
  onButtonActive: PropTypes.func,
  onButtonCompleted: PropTypes.func,
  onButtonClearAll: PropTypes.func,
};

export default Footer;