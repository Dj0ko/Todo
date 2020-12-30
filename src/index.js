import React from 'react';
import ReactDOM from 'react-dom';

import NewTaskForm from './components/new-task-form';
import TaskList from './components/task-list';
import Footer from './components/footer';

const App = () => {

  const todoTasks = [
    { className: 'completed', label: 'Completed task' },
    { className: 'editing', label: 'Editing task' },
    { className: 'active', label: 'Active task' }
  ];

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList todos={ todoTasks }/>
        <Footer />
      </section>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));