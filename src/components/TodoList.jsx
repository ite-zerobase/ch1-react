import TodoItem from './TodoItem';

function TodoList({ todos, setTodos }) {
  function deleteTodoItem(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function toggleTodoItem(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          deleteTodoItem={deleteTodoItem}
          toggleTodoItem={toggleTodoItem}
        />
      ))}
    </ul>
  );
}

export default TodoList;
