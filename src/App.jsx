import './App.css';
import TodoTitle from './components/TodoTitle';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <TodoTitle />
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
