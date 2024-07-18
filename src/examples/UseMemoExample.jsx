import { useMemo, useState } from 'react';

// 오래 걸리는 작업
const someHeavyWork = (count) => {
  let result = 0;
  for (let i = 0; i < 999999999; i++) {
    result = count;
  }
  console.log('무거운 작업');
  return result;
};

// 빨리 끝나는 작업
const someLightWork = (count) => {
  console.log('가벼운 작업');
  return count;
};

function UseMemoExample1() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);

  // lightResult가 갱신되면, heavyResult도 갱신되어 불필요한 작업이 실행됨
  const lightResult = someLightWork(count1);
  const heavyResult = someHeavyWork(count2);

  // const heavyResult = useMemo(() => someHeavyWork(count2), [count2]);

  return (
    <div>
      <button onClick={() => setCount1((count) => count + 1)}>
        가벼운 작업
      </button>
      <button onClick={() => setCount2((count) => count + 1)}>
        무거운 작업
      </button>
      <div>가벼운 작업 결과: {lightResult}</div>
      <div>무거운 작업 결과: {heavyResult}</div>
    </div>
  );
}

export default UseMemoExample1;
