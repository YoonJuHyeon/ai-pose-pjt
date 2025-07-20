// API 베이스: axios 예시(백엔드와 연동할 때 사용)
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',  // 백엔드 개발 서버 주소에 맞게 수정
  withCredentials: true,
});

export default api;
