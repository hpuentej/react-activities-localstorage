import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import {TaskCreator} from "./components/TaskCreator";
import {TaskTable} from "./components/TaskTable";

function App() {
  const [tasksItems, setTasksItems] = useState([
    {
      name: "Example's task",
      isDone: false},
  ]);

  function createNewTask(taskName){
    !tasksItems.find(task => task.name === taskName || taskName==='')
      ? setTasksItems(tasksItems.concat({name: taskName, isDone: false}))
      : alert("Task already exists or is empty");
    // setTasksItems([...tasksItems, {name: "Task 4", isDone: false}]);
  }

  function toggleTask(taskX){
    setTasksItems(
      tasksItems.map(task =>( 
        task.name === taskX.name ? {...task, isDone: !task.isDone} : task))
    )     
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
      <TaskTable
        tasksItems={tasksItems}
        toggleTask={toggleTask}
      />
    </div>
  );
}

export default App;
