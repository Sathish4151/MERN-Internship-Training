import React, { useState } from 'react';
import './App.css';
import TodoList from './todolist';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: text,
      };
      setTodos([...todos, newTodo]);
      setText('');
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>To-Do List App</h1>
      <div className="add-todo">
        <input
          type="text"
          placeholder="Enter your to-do"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
}

export default App;
