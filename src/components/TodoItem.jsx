function TodoItem({ todo, index, changeState, deleteTodo }) {

  return (
    <li className="todo-item">
      <input type="checkbox" checked={todo.checked} onChange={e=>changeState(index)}/>
      {/* 과제 4.1 span 요소 안에 todo 객체의 text 값이 렌더링되어야 합니다. */}
      <span style={{textDecoration: todo.checked ? 'line-through' : 'none'}}>{todo.text}</span>
      <button onClick={() => deleteTodo(index)}>×</button>
    </li>
  );
}

export default TodoItem;
