import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  LinearProgress,
  Modal,
  Paper,
  Chip,
} from "@mui/material";
import { useParams, useLocation } from "react-router-dom";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

// 데모용 이미지 및 유저 데이터
const demoAvatar = "https://i.pravatar.cc/150?img=5";
const aiPoseImg =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=240&q=80";
const users = [
  { id: 1, name: "gangnamTiger", avatar: demoAvatar, score: 77 },
  { id: 2, name: "poseKing", avatar: "https://i.pravatar.cc/150?img=2", score: 83 },
  { id: 3, name: "u", avatar: "https://i.pravatar.cc/150?img=4", score: 88 },
];

export default function GameRoomPage() {
  // 방 번호 & 방 이름 받기
  const { roomId } = useParams<{ roomId: string }>();
  const location = useLocation();
  const state = location.state as { roomName?: string };

  const [time, setTime] = useState(22);
  const [captured, setCaptured] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // 타이머 다운
  React.useEffect(() => {
    if (time > 0 && !captured) {
      const t = setTimeout(() => setTime((prev) => prev - 1), 1000);
      return () => clearTimeout(t);
    }
    if (time === 0 && !captured) setCaptured(true);
  }, [time, captured]);

  return (
    <Box
      bgcolor="#151b2b"
      minHeight="100vh"
      py={4}
      px={2}
      color="#fff"
      fontFamily="'Orbitron', sans-serif"
    >
      {/* 상단 게임 정보바 */}
      <Box display="flex" gap={2} alignItems="center" mb={2}>
        <SportsEsportsIcon fontSize="large" />
        <Typography variant="h5" fontWeight={700}>
          AI 포즈 따라잡기 게임
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Chip label={`Room #${roomId}`} color="info" size="medium" />
      </Box>

      {/* 방 이름/번호 표시 */}
      <Typography variant="h6" color="#FFD600" mt={2} mb={1}>
        방 이름: {state?.roomName || "이름 없음"}
      </Typography>

      {/* 타이머 진행바, 남은 시간 */}
      <Box mb={2}>
        <LinearProgress
          variant="determinate"
          value={100 - (time * 100) / 30}
          sx={{ height: 14, borderRadius: 8, bgcolor: "#222" }}
          color="success"
        />
        <Typography mt={0.5} align="right" variant="body1">
          남은 시간 : <b style={{ color: "#FFD600" }}>{time}</b> 초
        </Typography>
      </Box>

      {/* 본문 */}
      <Box display="flex" gap={4} flexWrap="wrap" justifyContent="center">
        {/* AI 포즈 */}
        <Paper sx={{ p: 2, bgcolor: "#2d3957", textAlign: "center" }}>
          <Typography variant="subtitle1" color="#80deea">
            AI 포즈
          </Typography>
          <img
            src={aiPoseImg}
            alt="AI Pose"
            style={{
              width: 160,
              height: 180,
              borderRadius: 14,
              border: "4px solid #00BFA5",
              boxShadow: "0 6px 20px #2228",
              marginTop: 8,
              marginBottom: 4,
            }}
          />
        </Paper>
        {/* 내 카메라 */}
        <Paper sx={{ p: 2, bgcolor: "#232d47", textAlign: "center" }}>
          <Typography variant="subtitle1" color="#aeea00">
            내 웹캠(포즈)
          </Typography>
          <Avatar
            src={demoAvatar}
            alt="내카메라"
            sx={{
              width: 120,
              height: 120,
              mx: "auto",
              my: 1,
              border: "3px dashed #8c9eff",
              bgcolor: "#283593",
              fontSize: 40,
            }}
          />
          {!captured ? (
            <Button
              variant="contained"
              color="success"
              size="large"
              onClick={() => setCaptured(true)}
              sx={{ mt: 2, fontWeight: 700, width: 120 }}
            >
              포즈 캡처
            </Button>
          ) : (
            <Chip label="포즈 캡처됨" color="success" sx={{ mt: 2 }} />
          )}
        </Paper>
        {/* 채팅창 (간단 예시) */}
        <Paper sx={{ p: 2, bgcolor: "#30405d", minWidth: 190 }}>
          <Typography variant="subtitle1" color="#fff">
            채팅
          </Typography>
          <Box bgcolor="#223" p={1.5} borderRadius={2} mt={1} fontSize={15}>
            [gangnamTiger] ㅋㅋㅋ 어렵다! <br />
            [u] 나 거의 똑같은데?
          </Box>
        </Paper>
      </Box>

      {/* 참여자 리스트 */}
      <Box
        mt={5}
        display="flex"
        justifyContent="center"
        gap={2}
        flexWrap="wrap"
      >
        <Typography variant="h6" fontWeight={600}>
          참여자
        </Typography>
        {users.map((u, idx) => (
          <Box
            key={u.id}
            py={1}
            px={2}
            mr={1}
            bgcolor="#232d47"
            borderRadius={6}
            display="flex"
            alignItems="center"
            gap={1}
            border={idx === 2 ? "2.5px solid #FFD600" : "2px solid #111"}
            boxShadow={idx === 2 ? "0 0 6px #FFD60077" : ""}
          >
            <Avatar src={u.avatar} />
            <Typography fontWeight="bold">{u.name}</Typography>
            <Typography color="#FFD600" fontWeight={900}>
              {u.score}
            </Typography>
            {idx === 2 && <EmojiEventsIcon sx={{ color: "#FFD600" }} />}
          </Box>
        ))}
      </Box>

      {/* ---- 게임결과(모달) ---- */}
      <Modal open={captured && openModal}>
        <Box
          bgcolor="#fff"
          p={4}
          mx="auto"
          mt="10vh"
          boxShadow={24}
          borderRadius={6}
          width={380}
          textAlign="center"
        >
          <Typography variant="h5" fontWeight={800} color="#222">
            이번 라운드 결과!
          </Typography>
          <ol>
            <li>
              <b>u</b> (88점)
            </li>
            <li>
              <b>poseKing</b> (83점)
            </li>
            <li>
              <b>gangnamTiger</b> (77점)
            </li>
          </ol>
          <Button
            sx={{ mt: 3 }}
            variant="contained"
            onClick={() => setOpenModal(false)}
          >
            다음 라운드!
          </Button>
        </Box>
      </Modal>

      {/* 모달 띄우는 예시 버튼 */}
      {captured && !openModal && (
        <Button
          sx={{ mt: 4 }}
          color="info"
          variant="contained"
          onClick={() => setOpenModal(true)}
        >
          라운드 결과 보기
        </Button>
      )}
    </Box>
  );
}
