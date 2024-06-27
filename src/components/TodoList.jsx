import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <ul className="todo-list">
      {/* 과제 3.1 App컴포넌트의 todos를 사용해서 여러개의 TodoItem이 렌더링 되어야 합니다. */

        props.todos.map(
          (item, idx)=>(
              <TodoItem key={item.id} idx={idx} text={item.text} checked={item.checked}
                  todos={props.todos} setTodos={props.setTodos} />
          )
        )
      }
    </ul>
  );
}

export default TodoList;
