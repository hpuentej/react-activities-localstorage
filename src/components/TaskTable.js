import React from 'react';
import { TaskRow } from './TaskRow';

export const TaskTable = ({tasksItems, toggleTask}) => {

  const listTasks = tasksItems.map((task, index) => {
    return (
      <TaskRow 
        key={index}
        task={task}
        toggleTask={toggleTask}
      />
    );
  })

  return ( 
  <table className='table'>
      <thead> 
        <tr> 
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody className="activities">
        {listTasks}
      </tbody>
    </table>
  );
}