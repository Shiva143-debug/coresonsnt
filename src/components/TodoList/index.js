// src/components/TodoList.js

import Todo from './Todo'

const TodoList = ({todos, toggleComplete, editTodo, deleteTodo}) => (
  <div>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    ))}
  </div>
)

export default TodoList
