import './App.css';
import TodoTitle from './components/TodoTitle';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // 과제 1.1 todos state를 알맞은 초기값과 함께 정의해 주세요.
  const [todos,setTodos] = useState([]);

  function loadTodos(){
    axios.get('http://13.124.90.5:8080/todo').then((res)=>{
      console.log('로드 완료', res.data);
      setTodos(res.data);
    }).catch((e)=>{
      console.error(e);
    });
  }

  // 특정값이 바뀔때만 렌더링하게 설정 가능
  // useEffect(함수, 바라볼변수) 
  // 변수를 []로 지정하여 변할 수 없게 만듬.
  useEffect(()=>{
    loadTodos();
  },[]);

  return (
    <>
      <TodoTitle />
      
      {/* 과제 1.2 TodoInput이 todos에 값을 추가할 수 있어야 합니다. */}
      <TodoInput setTodos={setTodos} todos={todos}/>

      {/* 과제 1.3 TodoList가 todos를 읽고 내용을 화면에 그려주어야 합니다. */}
      <TodoList todos={todos} setTodos={setTodos}/>
    </>
  );
}

export default App;
