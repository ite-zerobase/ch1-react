import { useState } from 'react';

function TodoInput({ todos, setTodos }) {
  const [newTodoText, setNewTodoText] = useState('');
  function addTodo() {
    if (newTodoText.trim().length === 0) return;
    const data = {
      id: `todo-${Date.now()}`,
      text: newTodoText,
      checked: false,
    };
    setTodos([data, ...todos]);
    setNewTodoText('');
  }
  return (
    <div className="todo-input">
      <input
        placeholder="할 일을 입력해보세요"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <button onClick={addTodo}>저장</button>
    </div>
  );
}

export default TodoInput;
