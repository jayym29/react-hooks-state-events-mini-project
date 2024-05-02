import React, {useState} from "react";

function NewTaskForm( {categories, onTaskFormSubmit}) {
  const [taskName, setTaskName] = useState("")
  const [taskCat, setTaskCat] = useState('Food')
  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit(newTaskObj) 
  }
  const newTaskObj = {
    text : taskName,
    category : taskCat
  }

  function handleTaskName(e) {
    setTaskName(e.target.value)
    
  }
  function handleCategory(e) {
    setTaskCat(e.target.value)

  }
  const filteredCategories = categories.filter((category) => {
    if(category !== 'All') {
      return true
    }
  })
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskName} onChange={handleTaskName} />
      </label>
      <label>
        Category
        <select name="category" value={taskCat} onChange={handleCategory}>
          {filteredCategories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task"  />
    </form>
  );
}

export default NewTaskForm;
