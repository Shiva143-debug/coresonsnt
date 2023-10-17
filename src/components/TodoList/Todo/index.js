// src/components/Todo.js
import './index.css'
import {AiFillDelete} from 'react-icons/ai'

const Todo = ({todo, toggleComplete, editTodo, deleteTodo}) => {
  const handleComplete = () => {
    toggleComplete(todo.id)
  }

  const handleEdit = () => {
    const newTitle = prompt('Edit task:', todo.title)
    // const newTitle = todo.title
    if (newTitle) {
      editTodo(todo.id, newTitle)
    }
  }

  const handleDelete = () => {
    deleteTodo(todo.id)
  }

  return (
    <div className="todo">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleComplete}
        />

        <span
          style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
        >
          {todo.title}
        </span>
      </div>
      <button type="button" className="button" onClick={handleEdit}>
        Edit
      </button>
      <button type="button" onClick={handleDelete} className="d-button">
        <AiFillDelete />
      </button>
    </div>
  )
}

export default Todo
