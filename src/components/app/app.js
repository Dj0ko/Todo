import React, { Component } from 'react';

import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';
import AddTask from '../add-task';

export default class App extends Component {

  // state = {
  //   todoTasks: [
  //     { className: 'completed', label: 'Completed task', id: 1 },
  //     { className: 'editing', label: 'Editing task', id: 2 },
  //     { className: '', label: 'Active task', id: 3 }
  //   ]
  // };

  maxId = 100;

  state = {
    todoTasks: [
      this.createTodoTask('Completed task'),
      this.createTodoTask('Editing task'),
      this.createTodoTask('Active task')
    ]
  };

  createTodoTask(label) {
    return {
      label,
      done: false,
      id: this.maxId++
    };
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

  addItem = (text) => {
    const newItem = this.createTodoTask(text);

    this.setState(({ todoTasks }) => {
      const newArr = [
        ...todoTasks,
        newItem
      ];

      return {
        todoTasks: newArr
      }
    })
  };

  onToggleDone = (id) => {
    this.setState(({ todoTasks }) => {
      const idx = todoTasks.findIndex((el) => el.id === id);

      const oldItem = todoTasks[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const newArr = [
        ...todoTasks.slice(0, idx),
        newItem,
        ...todoTasks.slice(idx + 1)
      ];

      return {
        todoTasks: newArr
      }
    });
  };

  render() {
    const { todoTasks } = this.state;
    const doneCount = todoTasks.filter(el => !el.done).length;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList
            todos={todoTasks}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
          />
          <AddTask onItemAdded={this.addItem} />
          <Footer done={doneCount}/>
        </section>
      </section>
    );
  }
}