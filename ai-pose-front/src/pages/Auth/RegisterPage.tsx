import React, { useState } from 'react';
import './AuthForm.css';

export default function RegisterPage() {
  const [form, setForm] = useState({ username: '', email: '', password: '', password2: '' });
  const [err, setErr] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErr('');
    if (!form.username || !form.email || !form.password || !form.password2) {
      setErr('모든 항목을 입력하세요.');
      return;
    }
    if (form.password !== form.password2) {
      setErr('비밀번호가 일치하지 않습니다.');
      return;
    }
    // 실제 회원가입 API 연동 필요
    alert(`${form.username}님 회원가입 시도!`);
  };

  return (
    <div className="auth-container">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="아이디"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="이메일"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="비밀번호"
        />
        <input
          type="password"
          name="password2"
          value={form.password2}
          onChange={handleChange}
          placeholder="비밀번호 확인"
        />
        <button type="submit">회원가입</button>
        {err && <div className="auth-error">{err}</div>}
      </form>
    </div>
  );
}
