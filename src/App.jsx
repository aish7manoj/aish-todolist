import { useState } from 'react'

// Importing custom hook for local storage management
import useLocalStorage from './hooks/useLocalStorage'

// custom components importing
import CustomForm from './components/CustomForm'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => { 
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => { 
    setTasks(prevState => prevState.filter(t => t.id !== id));
  }

  const toggleTask = (id) => {  // Function to toggle the checked status of a task
    setTasks(prevState => prevState.map(t => (
      t.id === id
        ? { ...t, checked: !t.checked }
        : t
    )))
  }

    // Function to update an existing task's name
  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
        ? { ...t, name: task.name }
        : t
    )))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus();
  }

  const enterEditMode = (task) => { 
  // Function to enter edit mode with the selected task
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  }

  return (
    <div className="container">
      <header>
        <h1>Todo List</h1>
        <p>"Plan Your Goals, Achieve Your Dreams!"</p>
      </header>
      {
        isEditing && (
          <AddTodo
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />
        )
      }
      <CustomForm addTask={addTask}/>
      {tasks && (
        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  )
}

export default App;
