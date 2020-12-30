import React from 'react';
import Task from './task';

const TaskList = ({ todos }) => {

  const tasks = todos.map(item => {
    return (
      <Task {...item}/>
    );
  })
  return (
    <ul className="todo-list">
      { tasks }
    </ul>
  );
}

export default TaskList;