import React from "react";
import Task from "./Task";


function TaskList({ tasks, setTask }) {
  const task = tasks.map((task) => { 
    return <Task key={task.text} task={task} handleDelete={handleDelete} text={task.text} category={task.category}/>  })
    
    
 
  function handleDelete(taskId) {
    const tasksFil = tasks.filter((task) => {
      if(task.text !== taskId) {
        return true
      }
    })
    setTask(tasksFil)
  }
  
  return (
    <div className="tasks">
      {task}
    </div>
  );
}

export default TaskList;