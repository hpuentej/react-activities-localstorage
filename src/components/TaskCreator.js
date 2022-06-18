import React from 'react';
import {useState} from 'react';

export const TaskCreator = () => {
  const [newTaskName, setNewTaskName] = useState('');
  const handleSubmit = (e) =>{
    e.preventDefault(); // prevent default behavior of the form and not reload the page
    localStorage.setItem(newTaskName, 'New Task')    
    setNewTaskName('');
  }
  return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new activity"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button>
          Add activity
        </button>
      </form>
  )
}
