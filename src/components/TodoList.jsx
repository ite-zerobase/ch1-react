import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {

  //할일 체크했을 때 취소선 노출 함수
  function changeState(index) {
    const copyTodos = [...todos];
    copyTodos[index] = { ...copyTodos[index], checked: !todos[index].checked };

    setTodos(copyTodos);
  }

  function deleteTodo(deleteIndex) {
    console.log(deleteIndex)
    setTodos(todos.filter((_, index) => index !== deleteIndex))
  }

  return (
    <ul className="todo-list">
      {/* 과제 3.1 App컴포넌트의 todos를 사용해서 여러개의 TodoItem이 렌더링 되어야 합니다. */}
      {
        todos.map(
          (todo,index) => (
            <TodoItem todo={todo} index={index} deleteTodo={deleteTodo} changeState={changeState} key={ todo.id } />
          )
        )
      }
    </ul>
  );
}

export default TodoList;
