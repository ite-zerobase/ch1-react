import './App.css';
import { useState } from 'react';

import TodoTitle from './components/TodoTitle';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

function App() {
  // 과제 1.1 todos state를 알맞은 초기값과 함께 정의해 주세요.
  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoTitle />
      {/* 과제 1.2 TodoInput이 todos에 값을 추가할 수 있어야 합니다. */}
      <TodoInput todos={ todos } setTodos={setTodos}/>
      {/* 과제 1.3 TodoList가 todos를 읽고 내용을 화면에 그려주어야 합니다. */}
      <TodoList todos={ todos } setTodos={setTodos}/>
    </>
  );
}

export default App;
