import { useRef } from 'react';

function Input1() {
  function onFocus1() {
    document.getElementById('myInput').setAttribute('class', 'highlight');
  }
  function onBlur1() {
    document.getElementById('myInput').setAttribute('class', '');
  }
  return (
    <div>
      <input
        id="myInput"
        onFocus={onFocus1}
        onBlur={onBlur1}
        placeholder="눌러봐~"
      />
    </div>
  );
}
function Input2() {
  const inputRef = useRef(null);
  function onFocus2() {
    inputRef.current.setAttribute('class', 'highlight');
  }
  function onBlur2() {
    inputRef.current.setAttribute('class', '');
  }
  return (
    <div>
      <input
        ref={inputRef}
        onFocus={onFocus2}
        onBlur={onBlur2}
        placeholder="눌러봐~"
      />
    </div>
  );
}

function UseRefExample2() {
  return (
    <div class="useref-input">
      <section>
        <p>byId</p>
        <Input1 />
        <Input1 />
        <Input1 />
      </section>
      <section>
        <p>useRef</p>
        <Input2 />
        <Input2 />
        <Input2 />
      </section>
    </div>
  );
}

export default UseRefExample2;
