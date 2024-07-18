import { useCallback, useState } from 'react';

function Paragraph({ name, show }) {
  if (show) {
    return <p>안녕하세요 {name} 입니다.</p>;
  }
  return <p></p>;
}

function UseCallbackExmaple() {
  const [name, setName] = useState('김말이');
  const [showParagraph, setShowParagraph] = useState(false);

  // toggleParagraph는 버튼 클릭 시 매번 재정의됨.
  const toggleParagraph = () => {
    setShowParagraph((show) => !show);
  };
  // const toggleParagraph = useCallback(() => {
  //   setShowParagraph((show) => !show);
  // }, []);

  return (
    <>
      <button onClick={toggleParagraph}>토글</button>
      <Paragraph name={name} show={showParagraph} />
    </>
  );
}
export default UseCallbackExmaple;
