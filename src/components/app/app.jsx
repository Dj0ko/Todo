import React, { Component } from 'react';

import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';

export default class App extends Component {
  maxId = 100;

  state = {
    todoTasks: [
      this.createTodoTask('Completed task'),
      this.createTodoTask('Editing task'),
      this.createTodoTask('Active task'),
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoTasks }) => {
      const idx = todoTasks.findIndex((el) => el.id === id);

      const updatedTodoTasks = [...todoTasks.slice(0, idx), ...todoTasks.slice(idx + 1)];

      return {
        todoTasks: updatedTodoTasks,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoTask(text);
    newItem.time = new Date();
    if (text.trim() !== '') {
      this.setState(({ todoTasks }) => {
        const updatedTodoTasks = [...todoTasks, newItem];

        return {
          todoTasks: updatedTodoTasks,
        };
      });
    }
  };

  onToggleDone = (id) => {
    this.setState(({ todoTasks }) => {
      const idx = todoTasks.findIndex((el) => el.id === id);

      const oldItem = todoTasks[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const doneTasks = [...todoTasks.slice(0, idx), newItem, ...todoTasks.slice(idx + 1)];

      return {
        todoTasks: doneTasks,
      };
    });
  };

  onButtonAll = () => {
    this.setState(({ todoTasks }) => {
      const allTasks = todoTasks.filter((el) => {
        const item = el;
        if (el.nameOfClass) {
          item.nameOfClass = '';
        }
        return item;
      });
      return {
        todoTasks: allTasks,
      };
    });
  };

  onButtonActive = () => {
    this.setState(({ todoTasks }) => {
      const activeTasks = todoTasks.filter((el) => {
        const item = el;
        if (el.done) {
          item.nameOfClass = 'hidden';
        } else {
          item.nameOfClass = '';
        }
        return item;
      });
      return {
        todoTasks: activeTasks,
      };
    });
  };

  onButtonCompleted = () => {
    this.setState(({ todoTasks }) => {
      const completedTasks = todoTasks.filter((el) => {
        const item = el;
        if (!el.done) {
          item.nameOfClass = 'hidden';
        } else {
          item.nameOfClass = '';
        }
        return item;
      });
      return {
        todoTasks: completedTasks,
      };
    });
  };

  onButtonClearAll = () => {
    this.setState(({ todoTasks }) => {
      const activeTasks = [];
      todoTasks.filter((el) => {
        if (!el.done) {
          activeTasks.push(el);
        }
        return el;
      });
      return {
        todoTasks: activeTasks,
      };
    });
  };

  createTodoTask(label) {
    this.maxId += 1;
    return {
      label,
      done: false,
      id: this.maxId,
      nameOfClass: '',
    };
  }

  render() {
    const { todoTasks } = this.state;
    const doneCount = todoTasks.filter((el) => !el.done).length;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onItemAdded={this.addItem} />
        </header>
        <section className="main">
          <TaskList todos={todoTasks} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone} />
          <Footer
            done={doneCount}
            onButtonAll={this.onButtonAll}
            onButtonActive={this.onButtonActive}
            onButtonCompleted={this.onButtonCompleted}
            onButtonClearAll={this.onButtonClearAll}
          />
        </section>
      </section>
    );
  }
}
