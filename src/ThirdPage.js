import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";

function ThirdPage() {
  const { state } = useLocation();
  const [diaries, setDiaries] = useState([]);
  const navigate = useNavigate();
  const [isReversed, setIsReversed] = useState(false);

  const handleDiaryClick = (diaries) => {
    navigate("/ShowDiary", {
      state: { text: diaries.content, imageSrc: diaries.imageSrc },
    });
  };

  const GoCalender = () => {
    navigate("/Calender");
  };

  const toggleOrder = () => {
    setIsReversed(!isReversed);
  };

  const displayedDiaries = isReversed ? [...diaries].reverse() : diaries;

  useEffect(() => {
    const fetchDiaries = async () => {
      try {
        const token = localStorage.getItem("jwt"); // JWT 토큰 가져오기
        const response = await axios.get("http://43.201.103.60:8080/post", {
          headers: {
            Authorization: ` ${token}`, // 토큰 추가
          },
        });
        setDiaries(response.data); // 서버에서 받은 일기 목록으로 상태 업데이트
      } catch (error) {
        console.error("일기 목록을 가져오는 데 실패했습니다:", error);
      }
    };

    fetchDiaries();
  }, []);
  // diaries 상태가 업데이트될 때마다 로컬 스토리지에 저장

  useEffect(() => {
    if (state?.newDiary) {
      setDiaries((prevDiaries) => {
        const isDuplicate = prevDiaries.some(
          (diaries) => diaries.content === state.newDiary.content
        );
        if (isDuplicate) {
          return [...prevDiaries, state.newDiary];
        }
        return prevDiaries; // 중복 방지
        // 기존 일기에 새 일기 추가
      });
      // 상태를 초기화하지 않음으로써 기존 일기가 사라지는 문제를 방지
    }
  }, [state]);
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        {/* Title */}
        <header
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            margin: "20px 0",
          }}
        >
          오늘의 일기
        </header>

        {/* List */}
        <ListContainer>
          <Table>
            <thead>
              <tr>
                <Th>목록</Th>
                <Th>일기</Th>
              </tr>
            </thead>
            <tbody>
              {displayedDiaries.map((diary, index) => (
                <Tr
                  key={diary.id || index}
                  onClick={() => handleDiaryClick(diary)}
                >
                  <Td>{index + 1}</Td>
                  <Td>{diary.content || "Untitled"}</Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </ListContainer>

        <WriteButton onClick={GoCalender}>일기쓰기</WriteButton>
      </AppContainer>
    </>
  );
}

export default ThirdPage;

// 스타일 정의
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #f0f0f0;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  text-align: center;
  padding: 10px;
  border-radius: 15px;
  background-color: #eae6f8;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ListContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #d6b3ff;
  padding: 10px;
  font-size: 18px;
`;

const Tr = styled.tr`
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
`;

const WriteButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  background-color: #6c63ff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #5a54d6;
  }
`;
