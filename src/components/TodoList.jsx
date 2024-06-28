import axios from 'axios';
import TodoItem from './TodoItem';

function TodoList(props) {

  function loadTodos(){
    axios.get('http://13.124.90.5:8080/todo').then((res)=>{
      console.log('로드 완료', res.data);
      props.setTodos(res.data);
    }).catch((e)=>{
      console.error(e);
    });
  }

  function deleteTodoItem(id) {
    //props.setTodos(props.todos.filter((todo) => todo.id !== id));
    axios.delete(`http://13.124.90.5:8080/todo/${id}`).then((res)=>{
      console.log("SUCCESS DELETE", res.data);
      loadTodos();
    })
    .catch((e)=>{
      console.error(e);
    })
  }

  function handleChecked(id,isChecked){
      let newArr = [...props.todos];
      console.log(id);
      console.log(props.todos);
      
      newArr[id].checked = isChecked;
      props.setTodos(newArr);
    }

  return (
    <ul className="todo-list">
      {/* 과제 3.1 App컴포넌트의 todos를 사용해서 여러개의 TodoItem이 렌더링 되어야 합니다. */

        props.todos.map(
          (item, idx)=>(
              <TodoItem  key={idx} todo={item} deleteTodoItem={deleteTodoItem} handleChecked={handleChecked} />
          )
        )
      }
    </ul>
  );
}

export default TodoList;
