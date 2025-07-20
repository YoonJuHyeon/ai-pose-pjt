import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>AI 포즈 따라잡기 게임에 오신 걸 환영합니다!</h1>
      <div style={{ margin: '30px 0' }}>
        <Link to="/login">
          <button style={btnStyle}>로그인</button>
        </Link>{' '}
        <Link to="/register">
          <button style={btnStyle}>회원가입</button>
        </Link>{' '}
        <Link to="/game/create">
          <button style={btnStyle}>게임 방 만들기</button>
        </Link>
      </div>
      <img
        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=600&q=80"
        alt="ai-game"
        style={{ width: 180, borderRadius: 15, marginTop: 30, boxShadow: '0 2px 10px #bbb' }}
      />
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  background: '#0099ff',
  color: 'white',
  border: 'none',
  padding: '12px 30px',
  borderRadius: '7px',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  margin: '4px'
};
