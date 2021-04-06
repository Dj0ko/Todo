import React, { useState } from 'react';

import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';

const App = () => {
  const createTodoTask = (label, minutes = 30, seconds = 0) => ({
    label,
    done: false,
    id: label + Date.now(),
    nameOfClass: '',
    minutes: Number(minutes),
    seconds: Number(seconds),
  });

  const [dataState, setDataState] = useState({
    todoTasks: [createTodoTask('Completed task'), createTodoTask('Editing task'), createTodoTask('Active task')],
  });

  // Функция, добавляющая задачу
  const addItem = (text, minutes, seconds) => {
    const newItem = createTodoTask(text, minutes, seconds);
    newItem.time = new Date();
    if (text.trim() !== '') {
      setDataState(({ todoTasks }) => {
        const updatedTodoTasks = [...todoTasks, newItem];

        return {
          todoTasks: updatedTodoTasks,
        };
      });
    }
  };

  // Функция, удаляющая задачу
  const deleteItem = (id) => {
    setDataState(({ todoTasks }) => {
      const idx = todoTasks.findIndex((el) => el.id === id);

      const updatedTodoTasks = [...todoTasks.slice(0, idx), ...todoTasks.slice(idx + 1)];

      return {
        todoTasks: updatedTodoTasks,
      };
    });
  };

  // Функция, помечающая выполненную задачу
  const onToggleDone = (id) => {
    setDataState(({ todoTasks }) => {
      const idx = todoTasks.findIndex((el) => el.id === id);

      const oldItem = todoTasks[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const doneTasks = [...todoTasks.slice(0, idx), newItem, ...todoTasks.slice(idx + 1)];

      return {
        todoTasks: doneTasks,
      };
    });
  };

  // Функция, показывающая все задачи
  const onButtonAll = () => {
    setDataState(({ todoTasks }) => {
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

  // Функция, показывающая активные задачи
  const onButtonActive = () => {
    setDataState(({ todoTasks }) => {
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

  // Функция, показывающая выполненные задачи
  const onButtonCompleted = () => {
    setDataState(({ todoTasks }) => {
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

  // Функция, удалаяющая выполненные задачи
  const onButtonClearAll = () => {
    setDataState(({ todoTasks }) => {
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

  const doneCount = dataState.todoTasks.filter((el) => !el.done).length;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onItemAdded={addItem} />
      </header>
      <section className="main">
        <TaskList todos={dataState.todoTasks} onDeleted={deleteItem} onToggleDone={onToggleDone} />
        <Footer
          done={doneCount}
          onButtonAll={onButtonAll}
          onButtonActive={onButtonActive}
          onButtonCompleted={onButtonCompleted}
          onButtonClearAll={onButtonClearAll}
        />
      </section>
    </section>
  );
};

export default App;
