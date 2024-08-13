// component import
import TodoItem from './TodoItem';


// Importing styles for the component from a CSS module
import styles from './TodoList.module.css';

const TodoList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
  return (
    <ul className={styles.tasks}>
      {tasks.sort((a, b) => b.id - a.id).map(task => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      ))
      }
    </ul>
  )
}
export default TodoList;