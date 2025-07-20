import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateRoomPage() {
  const [roomName, setRoomName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!roomName.trim()) {
      setError('방 이름을 입력하세요.');
      return;
    }
    setError('');
    // 임시 랜덤 ID (실전에서는 백엔드에서 받아와야 함)
    const newRoomId = Math.floor(Math.random() * 1000000) + '';
    navigate(`/game/room/${newRoomId}`, { state: { roomName } });
  };

  return (
    <form
      style={{
        maxWidth: 400,
        margin: '40px auto',
        background: '#fff',
        padding: 32,
        borderRadius: 12,
        boxShadow: '0 2px 8px #aaa'
      }}
      onSubmit={handleCreate}
    >
      <h2>방 만들기</h2>
      <input
        type="text"
        value={roomName}
        onChange={e => setRoomName(e.target.value)}
        placeholder="게임방 이름"
        style={{ width: '100%', marginBottom: 12, padding: 8 }}
      />
      <button
        type="submit"
        style={{
          width: '100%',
          padding: 10,
          background: '#0099ff',
          color: '#fff',
          border: 'none',
          borderRadius: 5
        }}
      >
        방 생성
      </button>
      {error && <div style={{ color: '#d32f2f', marginTop: 10 }}>{error}</div>}
    </form>
  );
}
