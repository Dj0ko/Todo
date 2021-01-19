import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

const Task = (props) => {

  let { label, onDeleted, onToggleDone, done, time } = props;

  let className;

  if (done) {
    className = 'completed';
  } else {
    className = '';
  }

  if (props.class === 'hidden') {
    className = 'hidden';
  }

  let result = formatDistanceToNow(
    time,
    { includeSeconds: true }
  )



  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onToggleDone} />
        <label>
          <span className="description">{label}</span>
          <span className="created">{result}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
      <input type="text" className="edit" />
    </li>
  );
}

Task.defaultProps = {
  time: new Date()
}

Task.propTypes = {
  label: PropTypes.string,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool
}





export default Task;
