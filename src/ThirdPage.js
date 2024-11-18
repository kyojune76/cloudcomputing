import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import List from "./List";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;
const WriteButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
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
  const [diaries, setDiaries] = useState([]);
  const navigate = useNavigate();
  const [isReversed, setIsReversed] = useState(false);

  const GoCalender = () => {
    navigate("/Calender");
  };

  const toggleOrder = () => {
    setIsReversed(!isReversed);
  };

  const displayedDiaries = isReversed ? [...diaries].reverse() : diaries;

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Title />
        <List diaries={displayedDiaries} onToggleOrder={toggleOrder} />

        <WriteButton onClick={GoCalender}>일기쓰기</WriteButton>
      </AppContainer>
    </>
  );
}

export default ThirdPage;
