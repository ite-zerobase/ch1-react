function TodoItem({ todo, deleteTodoItem, toggleTodoItem }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => toggleTodoItem(todo.id)}
      />
      <span style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodoItem(todo.id)}>×</button>
    </li>
  );
}

export default TodoItem;
