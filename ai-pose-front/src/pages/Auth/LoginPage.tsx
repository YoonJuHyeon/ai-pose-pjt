import React, { useState } from 'react';
import './AuthForm.css';

export default function LoginPage() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [err, setErr] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErr('');
    if (!form.username || !form.password) {
      setErr('모든 항목을 입력하세요.');
      return;
    }
    // 실제 로그인 요청 구현(API 연동 필요)
    alert(`로그인 시도: ${form.username}`);
  };

  return (
    <div className="auth-container">
      <h2>로그인</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="아이디"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="비밀번호"
        />
        <button type="submit">로그인</button>
        {err && <div className="auth-error">{err}</div>}
      </form>
    </div>
  );
}
