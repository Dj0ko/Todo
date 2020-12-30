import React from 'react';

const Task = ({ className, label }) => {
  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{label}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      <input type="text" className="edit" value="Editing task" />
    </li>
  );
}

export default Task;
