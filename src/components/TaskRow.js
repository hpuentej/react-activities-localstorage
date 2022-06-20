import React from 'react';

export const TaskRow = ({task, toggleTask}) => {
  return (
    <tr>
      <td >
        <span> {task.name} </span>
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={()=>toggleTask(task)}
        />        
      </td> 
    </tr> // td means table data, th means table header and tr means table row
  )
}
