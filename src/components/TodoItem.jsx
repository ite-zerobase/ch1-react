function TodoItem(props) {

  function deleteTodoItem(idx) {
    let newArr = [...props.todos];
    newArr.splice(idx,1);
    props.setTodos(newArr);
  }

  function handleChecked(idx,isChecked){
    let newArr = [...props.todos];
    newArr[idx].checked = isChecked;
    props.setTodos(newArr);
  }

  return (
    <li className="todo-item">
      <input type="checkbox" checked={props.todos[props.idx].checked} onChange={()=>handleChecked(props.idx,event.target.checked)} />
      {/* 과제 4.1 span 요소 안에 todo 객체의 text 값이 렌더링되어야 합니다. */}
      <span style={{textDecorationLine:props.checked?'line-through':''}}>{props.text}</span>
      <button onClick={()=>deleteTodoItem(props.idx)} >×</button>
    </li>
  );
}

export default TodoItem;
