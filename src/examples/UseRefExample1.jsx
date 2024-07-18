import { useRef, useState } from 'react';

function UseRefExample() {
  const inputRef = useRef(null);

  const [toggleState, setToggleState] = useState(false);

  function focus() {
    inputRef.current.focus();
    // document.getElementById('inputbox').focus();
  }

  function print() {
    console.log(inputRef.current);
    // console.log(document.getElementById('inputbox'));
  }

  function toggle() {
    setToggleState((t) => !t);
  }

  function Input() {
    if (toggleState) {
      return (
        <input
          ref={inputRef}
          id="inputbox"
          type="text"
          placeholder="아이디 또는 이메일"
        />
      );
    }
  }
  return (
    <>
      <button onClick={toggle}>버튼 토글</button>
      <button onClick={print}>Ref 출력</button>
      <button onClick={focus}>포커스</button>
      <br />
      <Input />
    </>
  );
}

export default UseRefExample;
