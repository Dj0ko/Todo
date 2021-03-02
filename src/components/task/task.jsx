import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import Timer from '../timer/timer';

const Task = (props) => {
  const { label, onDeleted, onToggleDone, done, time, nameOfClass, minutes, seconds } = props;

  let className;

  if (done) {
    className = 'completed';
  } else {
    className = '';
  }

  if (nameOfClass === 'hidden') {
    className = 'hidden';
  }

  const result = formatDistanceToNow(time, { includeSeconds: true });

  return (
    <li className={className}>
      <div className="view">
        <input className="toggle" type="checkbox" onClick={onToggleDone} />
        <label>
          <span className="title">{label}</span>
          <Timer minutes={minutes} seconds={seconds} />
          <span className="description">{result}</span>
        </label>
        <button type="button" className="icon icon-edit">
          <span className="hidden">edit</span>
        </button>
        <button type="button" className="icon icon-destroy" onClick={onDeleted}>
          <span className="hidden">destroy</span>
        </button>
      </div>
      <input type="text" className="edit" />
    </li>
  );
};

Task.defaultProps = {
  time: new Date(),
  nameOfClass: '',
};

Task.propTypes = {
  nameOfClass: PropTypes.string,
  time: PropTypes.objectOf(PropTypes.object),
  label: PropTypes.string.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

export default Task;
