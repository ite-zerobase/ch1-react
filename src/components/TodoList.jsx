import TodoItem from "./TodoItem";

function TodoList() {
  const todoData = ["밥먹기", "빨래하기", "과제하기"];
  return (
    <>
      <h1>오늘의 할 일</h1>
      {todoData.map((todoText, index) => (
        <TodoItem key={index} todoText={todoText} />
      ))}
    </>
  );
}

export default TodoList;
