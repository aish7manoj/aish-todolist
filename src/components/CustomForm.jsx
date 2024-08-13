import { useState } from 'react';

// Importing PlusIcon from @heroicons for use in the butto
import { PlusIcon } from '@heroicons/react/24/solid'

const CustomForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  
  const handleFormSubmit = (e) => {    // Function to handle form submission
    e.preventDefault();
    addTask({ // Calls addTask with new task object containing name, checked status, and a unique ID
      name: task,
      checked: false,
      id: Date.now()
    })
    setTask("")
  }

  return (
    <form
      className="todo"
      onSubmit={handleFormSubmit}
      >
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        <label
          htmlFor="task"
          className="label"
        >Add item</label>
      </div>
      <button
        className="btn"
        aria-label="Add Task"
        type="submit"
        >
        <PlusIcon />
      </button>
    </form>
  )
}
export default CustomForm