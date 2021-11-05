import React, { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <header className="nav-header">
        <h3>Home</h3>
        <div className="nav-links">
          <a href="javascript:void(0)" rel="noopener noreferrer" >About</a>
          <a href="javascript:void(0)" rel="noopener noreferrer" >Works</a>
        </div>
      </header>
      <h2>ToDo List</h2>
      
      <AddTodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
