import React from 'react';
// import TaskList from '../task-list';

// export default class Task extends Component {

//   render() {

//     let { className, label, onDeleted, onToggleDone, done } = this.props;

//     if (done) {
//       className = 'completed';
//     } else {
//       className = '';
//     }

//     return (
//       <li className={className}>
//         <div className="view" onClick={onToggleDone}>
//           <input className="toggle" type="checkbox" />
//           <label>
//             <span className="description">{label}</span>
//             <span className="created">created 17 seconds ago</span>
//           </label>
//           <button className="icon icon-edit"></button>
//           <button className="icon icon-destroy" onClick={onDeleted}></button>
//         </div>
//         <input type="text" className="edit" value="Editing task" />
//       </li>
//     );
//   }
// }

const Task = (props) => {

  let { label, onDeleted, onToggleDone, done } = props;

  let className;

  if (done) {
    className = 'completed';
  } else {
    className = '';
  }

  return (
    <li className={className}>
      <div className="view" onClick={onToggleDone}>
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

export default Task;
