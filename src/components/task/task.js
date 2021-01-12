import React, { Component } from 'react';

export default class Task extends Component {


  onLabelClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      }
    });
  };

  state = {
    done: false
  };


  render() {

    let { className, label, onDeleted } = this.props;
    const { done } = this.state;

    if (done) {
      className = 'completed';
    } else {
      className = '';
    }

    return (
      <li className={className}>
        <div className="view" onClick={this.onLabelClick}>
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">{label}</span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <input type="text" className="edit" value="Editing task" />
      </li>
    );
  }
}
