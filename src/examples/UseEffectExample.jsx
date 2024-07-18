import { useEffect, useState } from 'react';

const serverUrl = 'https://localhost:1234';
const nicknames = ['김말이', '순대', '떡볶이', '피자', '치킨'];

function getNickname() {
  return nicknames[Math.floor(Math.random() * nicknames.length)];
}

function ChatRoom({ roomId }) {
  useEffect(() => {
    console.log(`${serverUrl} - ${roomId}번 방 연결 생성 완료`);
  }, [roomId]);
}

function UseEffectExample() {
  const [roomId, setRoomId] = useState(1);
  const [nickname, setNickname] = useState('김말이');
  return (
    <>
      <div>Room ID: {roomId}</div>
      <div>별명: {nickname}</div>
      <button onClick={() => setRoomId((id) => id + 1)}>방 변경</button>
      <button onClick={() => setNickname(getNickname())}>별칭 변경</button>
      <ChatRoom roomId={roomId} />
    </>
  );
}

export default UseEffectExample;
