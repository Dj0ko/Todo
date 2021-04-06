import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import './timer.css';

const Timer = ({ minutes, seconds }) => {
  const [value, setValue] = useState(minutes * 60 + seconds);
  const [click, setClick] = useState(false);

  const setTimer = () => {
    setValue((val) => val - 1);
  };

  useEffect(() => {
    if (click) {
      const timer = setInterval(setTimer, 1000);
      if (value === 0) {
        clearInterval(timer);
      }
      return () => clearInterval(timer);
    }
    return value;
  });

  // Функция для добавления 0 перед значениями состоящими из одной цифры
  const addZero = (data) => {
    if (String(data).length === 1) {
      return `0${data}`;
    }
    return data;
  };

  const setMinutes = Math.floor((value / 60) % 60);
  const setSeconds = Math.floor(value % 60);

  return (
    <span className="description">
      <button type="button" className="icon icon-play" onClick={() => setClick(true)}>
        <span className="hidden">play</span>
      </button>
      <button type="button" className="icon icon-pause" onClick={() => setClick(false)}>
        <span className="hidden">pause</span>
      </button>
      <span className="time">
        {addZero(setMinutes)}:{addZero(setSeconds)}
      </span>
    </span>
  );
};

export default Timer;

Timer.propTypes = {
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};
