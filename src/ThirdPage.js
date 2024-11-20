import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Title from "./Title";
import { useNavigate, useLocation } from "react-router-dom";
import List from "./List";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* 화면 높이 전체 */
    width: 100vw; /* 화면 너비 전체 */
    background-color: #f0f0f0; /* 배경색 */
  }
`;

const WriteButton = styled.button`
  margin-top: 100px;
  border-radius: 8px;
  border: ridge;
  cursor: pointer;
  font-size: 16px;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* 수직 중앙 정렬 */
  width: 600px;
  text-align: center;
  padding: 10px;
  border-radius: 15px;
  background-color: #eae6f8;

  /* 부모 기준으로 중앙 정렬 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function ThirdPage() {
  const { state } = useLocation();
  const [diaries, setDiaries] = useState([]);
  const navigate = useNavigate();
  const [isReversed, setIsReversed] = useState(false);
  const handleDiaryClick = (diary) => {
    navigate("/ShowDiary", {
      state: { text: diary.text, imageSrc: diary.imageSrc },
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
    if (state?.newDiary) {
      setDiaries((prevDiaries) => [...prevDiaries, state.newDiary]);
    }
  }, [state]);
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Title />
        <List
          diaries={displayedDiaries}
          onToggleOrder={toggleOrder}
          onDiaryClick={handleDiaryClick}
        />

        <WriteButton onClick={GoCalender}>일기쓰기</WriteButton>
      </AppContainer>
    </>
  );
}

export default ThirdPage;
