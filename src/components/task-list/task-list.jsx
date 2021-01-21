import React from 'react';
import PropTypes from 'prop-types';
import Task from '../task/task';

const TaskList = ({ todos, onDeleted, onToggleDone }) => {
  const tasks = todos.map((item) => (
    <Task {...item} key={item.id} onDeleted={() => onDeleted(item.id)} onToggleDone={() => onToggleDone(item.id)} />
  ));

  return <ul className="todo-list">{tasks}</ul>;
};

TaskList.defaultProps = {
  onDeleted: () => {},
  onToggleDone: () => {},
};

TaskList.propTypes = {
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TaskList;
