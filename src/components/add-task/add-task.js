import React, { Component} from 'react';

export default class AddTask extends Component {

  render() {
    return (
      <div className="add-task">
        <button onClick={ () => this.props.onItemAdded('Hello world')}>Add Item</button>
      </div>
    )
  }
}

