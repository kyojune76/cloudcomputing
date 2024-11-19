import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Title from "./Title";
import { useNavigate, useLocation } from "react-router-dom";
import List from "./List";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
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
  width: 600px;
  margin: auto;
  padding: 20px;
  border-radius: 15px;
  background-color: #eae6f8;
  position: relative;
  text-align: center;
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
