function TodoItem(props) {

  // function handleChecked(idx,isChecked){
  //   let newArr = [...props.todos];
  //   newArr[idx].checked = isChecked;
  //   props.setTodos(newArr);
  // }

  return (
    <li className="todo-item">
      <input type="checkbox" onChange={(e)=>props.handleChecked(props.todo.id,e.target.checked)}  />
      {/* 과제 4.1 span 요소 안에 todo 객체의 text 값이 렌더링되어야 합니다. */}
      <span style={{textDecorationLine:props.todo.checked?'line-through':''}}>{props.todo.text}</span>
      <button onClick={()=>props.deleteTodoItem(props.todo.id)} >×</button>
    </li>
  );
}

export default TodoItem;
