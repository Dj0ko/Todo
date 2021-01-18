import React from 'react';

const Task = (props) => {

  let { label, onDeleted, onToggleDone, done } = props;

  let className;

  if (done) {
    className = 'completed';
  } else {
    className = '';
  }

  if (props.class === 'hidden') {
    className = 'hidden';
  }

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onToggleDone}/>
        <label>
          <span className="description">{label}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
      <input type="text" className="edit" 
      // value="Editing task" 
      />
    </li>
  );
}

export default Task;
