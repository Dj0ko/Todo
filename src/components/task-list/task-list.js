import React from 'react';
import Task from '../task';
import PropTypes from 'prop-types';

const TaskList = ({ todos, onDeleted, onToggleDone }) => {

  const tasks = todos.map(item => {
    
    return (
      <Task
        {...item}
        key={item.id}
        onDeleted={() => onDeleted(item.id)}
        onToggleDone={() => onToggleDone(item.id)}
      />
    );
  })
  return (
    <ul className="todo-list">
      { tasks }
    </ul>
  );
}

TaskList.defaultProps = {
  onDeleted: () => {},
  onToggleDone: () => {}
}

TaskList.propTypes = {
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.object)
}

export default TaskList;