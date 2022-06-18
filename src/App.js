import "./App.css";
import React from "react";
import {useState} from "react";
import {TaskCreator} from "./components/TaskCreator";

function App() {
  const [tasksItems, setTasksItems] = useState([
    {name: "Task 1", isDone: false},
    {name: "Task 2", isDone: false},
    {name: "Task 3", isDone: false},
  ]);

  const listTasks = tasksItems.map((task, index) => {
    return (
      <tr key={index}>
        {/* <input type="checkbox" checked={task.isDone}/>  */}
        {/* <input type="checkbox" /> */}
        {/* <span>{task.name}</span> */}
        {task.name}
      </tr>
    );
  })

  return (
    <div className="App">
      <TaskCreator/>
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {/* {listTasks} */}
        </tbody>
      </table>
    </div>
  );
}
export default App;
