import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './timer.css';

export default class Timer extends Component {
  state = {
    value: 0,
    click: false,
  };

  componentDidMount() {
    const { minutes, seconds } = this.props;

    this.setState({
      value: minutes * 60 + seconds,
    });
    this.interval = setInterval(this.setTimer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onTogglePlay = () => {
    const { click } = this.state;

    if (!click) {
      this.setState({
        click: true,
      });
    }
  };

  onTogglePause = () => {
    this.setState({
      click: false,
    });
  };

  setTimer = () => {
    const { value, click } = this.state;

    if (!click) {
      return;
    }

    this.setState({
      value: value - 1,
    });
  };

  // Функция для добавления 0 перед значениями состоящими из одной цифры
  addZero = (data) => {
    if (String(data).length === 1) {
      return `0${data}`;
    }
    return data;
  };

  render() {
    const { value } = this.state;

    const minutes = Math.floor((value / 60) % 60);
    const seconds = Math.floor(value % 60);

    return (
      <span className="description">
        <button type="button" className="icon icon-play" onClick={this.onTogglePlay}>
          <span className="hidden">play</span>
        </button>
        <button type="button" className="icon icon-pause" onClick={this.onTogglePause}>
          <span className="hidden">pause</span>
        </button>
        <span className="time">
          {this.addZero(minutes)}:{this.addZero(seconds)}
        </span>
      </span>
    );
  }
}

Timer.propTypes = {
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};
