import React, { Component } from 'react';

import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';
// import { id } from 'date-fns/locale';

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

  onToggleAll = () => {
    this.setState(({ todoTasks }) => {
      todoTasks.filter(el => {
        if (el.class) {
          el.class = '';
        }
      })
      return {
        todoTasks: todoTasks
      }
    })
  }

  onToggleActive = () => {
    this.setState(({ todoTasks }) => {
      todoTasks.filter(el => {
        if (el.done) {
          el.class = 'hidden';
        } else {
          el.class = '';
        }
      })
      return {
        todoTasks: todoTasks
      }
    })
  }

  onToggleCompleted = () => {
    this.setState(({ todoTasks }) => {
      todoTasks.filter(el => {
        if (!el.done) {
          el.class = 'hidden';
        } else {
          el.class = '';
        }
      })
      return {
        todoTasks: todoTasks
      }
    })
  }

  onToggleClearAll = () => {
    this.setState(({ todoTasks }) => {
      todoTasks.filter(el => {
        if (el.done) {
          this.deleteItem(el.id);
        }
      })
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
            onToggleAll={this.onToggleAll}
            onToggleActive={this.onToggleActive}
            onToggleCompleted={this.onToggleCompleted}
            onToggleClearAll={this.onToggleClearAll}
          />
        </section>
      </section>
    );
  }
}