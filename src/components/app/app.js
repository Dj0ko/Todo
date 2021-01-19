import React, { Component } from 'react';

import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

export default class App extends Component {

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
      id: this.maxId++,
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
    newItem.time = new Date();

    this.setState(({ todoTasks }) => {
      const newArr = [
        ...todoTasks,
        newItem,
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

  onButtonAll = () => {
    this.setState(({ todoTasks }) => {
      let newArr = todoTasks.filter(el => {
        if (el.class) {
          el.class = '';
        }
        return el;
      })
      return {
        todoTasks: newArr
      }
    })
  }

  onButtonActive = () => {
    this.setState(({ todoTasks }) => {
      let newArr = todoTasks.filter(el => {
        if (el.done) {
          el.class = 'hidden';
        } else {
          el.class = '';
        }
        return el;
      })
      return {
        todoTasks: newArr
      }
    })
  }

  onButtonCompleted = () => {
    this.setState(({ todoTasks }) => {
      let newArr = todoTasks.filter(el => {
        if (!el.done) {
          el.class = 'hidden';
        } else {
          el.class = '';
        }
        return el;
      })
      return {
        todoTasks: newArr
      }
    })
  }

  onButtonClearAll = () => {
    this.setState(({ todoTasks }) => {
      let newArr = [];
      todoTasks.filter(el => {
        if (!el.done) {
          newArr.push(el);
        }
        return el;
      })
      return {
        todoTasks: newArr
      }
    })
  }

  render() {
    const { todoTasks } = this.state;
    const doneCount = todoTasks.filter(el => !el.done).length;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onItemAdded={this.addItem} />
        </header>
        <section className="main">
          <TaskList
            todos={todoTasks}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
          />
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
