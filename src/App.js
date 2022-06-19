import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import {TaskCreator} from "./components/TaskCreator";

function App() {
  const [tasksItems, setTasksItems] = useState([
    {name: "Example's task", isDone: false},
  ]);

  const listTasks = tasksItems.map((task, index) => {
    return (
      <td key={task.name}>
        {/* <input type="checkbox" /> */}
        {/* <span>{task.name}</span> */}
        {task.name}
      </td> // td means table data, th means table header and tr means table row
    );
  })

  function createNewTask(taskName){    
    !tasksItems.find(task => task.name === taskName || taskName==='')
      ? setTasksItems(tasksItems.concat({name: taskName, isDone: false}))
      : alert("Task already exists or is empty");
    // setTasksItems([...tasksItems, {name: "Task 4", isDone: false}]);
    
  }

  useEffect(()=>{
    const data = localStorage.getItem('tasksItems')
    if (data) {
      setTasksItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasksItems', JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <div className="App">
      <TaskCreator
        createNewTask={createNewTask}
      />
      <table className='table'>
        <thead> 
          <tr> 
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          <tr className="activities">
            {listTasks}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
