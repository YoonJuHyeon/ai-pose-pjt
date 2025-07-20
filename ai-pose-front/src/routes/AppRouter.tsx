import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/Auth/LoginPage';
import RegisterPage from '../pages/Auth/RegisterPage';
import MyProfilePage from '../pages/User/MyProfilePage';
import GameRoomPage from '../pages/Game/GameRoomPage';
import CreateRoomPage from '../pages/Game/CreateRoomPage';
import FriendListPage from '../pages/Friend/FriendListPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      {/* 간단 네비바 */}
      <nav style={{ margin: '10px 0' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/login">Login</Link> |{' '}
        <Link to="/register">Register</Link> |{' '}
        <Link to="/profile">Profile</Link> |{' '}
        <Link to="/game/create">Create Room</Link> |{' '}
        <Link to="/friends">Friends</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<MyProfilePage />} />
        <Route path="/game/room/:roomId" element={<GameRoomPage />} />
        <Route path="/game/create" element={<CreateRoomPage />} />
        <Route path="/friends" element={<FriendListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
