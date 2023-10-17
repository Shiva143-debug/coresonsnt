// src/App.js
import {useState, useEffect} from 'react'
import axios from 'axios'
import TodoList from './components/TodoList'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users/1/todos',
        )
        setTodos(response.data)
      } catch (error) {
        console.error('Error fetching todos:', error)
      }
    }

    fetchData()
  }, [])

  const addTodo = title => {
    if (title.trim()) {
      const newTodo = {
        id: Math.random(),
        title,
        completed: false,
      }
      setTodos([...todos, newTodo])
    }
  }

  const toggleComplete = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    )
    setTodos(updatedTodos)
  }

  const editTodo = (id, newTitle) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, title: newTitle} : todo,
    )
    setTodos(updatedTodos)
  }

  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  const filteredTodos = showCompleted
    ? todos.filter(todo => todo.completed)
    : todos

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="container">
        <input
          className="input"
          type="text"
          placeholder="Add a new task"
          onKeyDown={e => e.key === 'Enter' && addTodo(e.target.value)}
        />
        <div>
          <label className="label" htmlFor="id">
            Show Completed Tasks
          </label>
          <input
            id="id"
            type="checkbox"
            checked={showCompleted}
            onChange={() => setShowCompleted(!showCompleted)}
          />
        </div>
        <TodoList
          todos={filteredTodos}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}

export default App
