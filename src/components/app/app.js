import React, { Component } from 'react';

import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

export default class App extends Component {

  state = {
    todoTasks: [
      { className: 'completed', label: 'Completed task', id: 1 },
      { className: 'editing', label: 'Editing task', id: 2 },
      { className: '', label: 'Active task', id: 3 }
    ]
  };

  deleteItem = (id) => {
    this.setState(({ todoTasks }) => {
      const idx = todoTasks.findIndex((el) => el.id === id);

      const newArr = [
        ...todoTasks.slice(0, idx),
        ...todoTasks.slice(idx + 1)
      ];

      return {
        todoTasks: newArr
      }
    });
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList todos={this.state.todoTasks} onDeleted={this.deleteItem} />
          <Footer />
        </section>
      </section>
    );
  }
}