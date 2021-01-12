import React from 'react';
import Task from '../task';

const TaskList = ({ todos, onDeleted }) => {

  const tasks = todos.map(item => {
    return (
      <Task {...item} key={item.id} onDeleted={() => onDeleted(item.id)}/>
    );
  })
  return (
    <ul className="todo-list">
      { tasks}
    </ul>
  );
}

export default TaskList;