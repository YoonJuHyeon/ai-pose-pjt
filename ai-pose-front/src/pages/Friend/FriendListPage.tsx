import React, { useState } from "react";

type Friend = { id: number; nickname: string; };

export default function FriendListPage() {
  const [friends, setFriends] = useState<Friend[]>([
    { id: 1, nickname: "gangnamTiger" },
    { id: 2, nickname: "poseKing" }
  ]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    setFriends(friends.concat({ id: Date.now(), nickname: input.trim() }));
    setInput("");
  };

  const handleRemove = (id: number) => {
    setFriends(friends.filter(f => f.id !== id));
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", background: "#fff", padding: 32, borderRadius: 12 }}>
      <h2>친구 목록</h2>
      <ul>
        {friends.map(friend => (
          <li key={friend.id} style={{ marginBottom: 8 }}>
            {friend.nickname}
            <button
              onClick={() => handleRemove(friend.id)}
              style={{ marginLeft: 8, background: "#d32f2f", color: "#fff", border: "none", borderRadius: 4 }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="친구 닉네임"
        style={{ width: "65%", marginRight: 6, padding: 7 }}
      />
      <button
        onClick={handleAdd}
        style={{ background: "#0099ff", color: "#fff", border: "none", borderRadius: 5, padding: "8px 14px" }}
      >
        추가
      </button>
    </div>
  );
}
