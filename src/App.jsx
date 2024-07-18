import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import UseRefExample1 from './examples/UseRefExample1';
import UseRefExample2 from './examples/UseRefExample2';
import UseMemoExample from './examples/UseMemoExample';
import UseCallbackExmaple from './examples/UseCallbackExmaple';
import UseEffectExample from './examples/UseEffectExample';
import UseEffectBadExample from './examples/UseEffectBadExample';

function App() {
  return (
    <>
      {/* <UseRefExample1 /> */}
      {/* <UseRefExample2 /> */}
      {/* <UseMemoExample /> */}
      {/* <UseCallbackExmaple /> */}
      {/* <UseEffectExample /> */}
      <UseEffectBadExample />
    </>
  );
}

export default App;
