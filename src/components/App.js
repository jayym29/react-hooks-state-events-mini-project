import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTask] = useState(TASKS)
  function onTaskFormSubmit(newObj) {
    setTask([...tasks, newObj])
  }
  function handleClick(e) {
    
    const buttonValue = e.target.innerHTML
    if(e.target.className === '') {
      e.target.className = 'selected'
    } else {
      e.target.className = ''
    } 
    let tasksFil = TASKS.filter((task) => {
      if(buttonValue === 'All') {
        return true
      } else if (buttonValue === task.category) {
        return task.category === buttonValue
      }
      
    })
    setTask(tasksFil)
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleClick={handleClick}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} setTask={setTask}/>
    </div>
  );
}

export default App;