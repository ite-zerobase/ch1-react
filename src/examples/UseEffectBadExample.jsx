import { useEffect, useState } from 'react';

function UseEffectBadExample() {
  const [count, setCount] = useState(1);
  const array = ['one', 'two', 'three'];
  const run = () => {
    console.log('run');
  };
  const person = { age: 27, name: '승열' };

  // useEffect(() => {
  //   setCount((c) => c + 1);
  // });

  // useEffect(() => {
  //   setCount((c) => c + 1);
  // }, [array]);

  // useEffect(() => {
  //   setCount((c) => c + 1);
  // }, [run]);

  // useEffect(() => {
  //   setCount((c) => c + 1);
  // }, [person]);

  return (
    <>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>클릭</button>
    </>
  );
}

export default UseEffectBadExample;
