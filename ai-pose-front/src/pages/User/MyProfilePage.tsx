import React, { useState } from "react";

export default function MyProfilePage() {
  // 임시 프로필 상태 (실제론 서버에서 받아와야 함)
  const [profile, setProfile] = useState({
    nickname: "u",
    email: "your@email.com",
    image: ""
  });
  const [editing, setEditing] = useState(false);

  const [temp, setTemp] = useState(profile);

  const handleSave = () => {
    setProfile(temp);
    setEditing(false);
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", background: "#fff", padding: 32, borderRadius: 12 }}>
      <h2>내 프로필</h2>
      {editing ? (
        <>
          <input
            value={temp.nickname}
            onChange={e => setTemp({ ...temp, nickname: e.target.value })}
            placeholder="닉네임"
            style={{ width: "100%", marginBottom: 8, padding: 8 }}
          />
          <input
            value={temp.email}
            onChange={e => setTemp({ ...temp, email: e.target.value })}
            placeholder="이메일"
            style={{ width: "100%", marginBottom: 8, padding: 8 }}
          />
          <input
            value={temp.image}
            onChange={e => setTemp({ ...temp, image: e.target.value })}
            placeholder="프로필 이미지 URL"
            style={{ width: "100%", marginBottom: 8, padding: 8 }}
          />
          <button
            onClick={handleSave}
            style={{ width: "100%", padding: 10, background: "#00c853", color: "#fff", border: "none", borderRadius: 5 }}
          >
            저장
          </button>
        </>
      ) : (
        <>
          <img src={profile.image || "https://i.pravatar.cc/100"} alt="profile" style={{ borderRadius: "50%", width: 80, height: 80 }} />
          <p><b>닉네임:</b> {profile.nickname}</p>
          <p><b>이메일:</b> {profile.email}</p>
          <button
            onClick={() => setEditing(true)}
            style={{ padding: "8px 18px", background: "#0099ff", color: "#fff", border: "none", borderRadius: 5 }}
          >
            수정
          </button>
        </>
      )}
    </div>
  );
}
