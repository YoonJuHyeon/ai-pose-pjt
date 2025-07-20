// WebSocket용 커스텀 훅(샘플)
/*
import { useEffect } from 'react';
import io from 'socket.io-client';

export default function useSocket() {
  useEffect(() => {
    const socket = io('http://localhost:8080');
    return () => {
      socket.disconnect();
    };
  }, []);
}
*/
// 위 주석을 필요에 따라 해제
export default function useSocket() { /* 나중에 구현 */ }
