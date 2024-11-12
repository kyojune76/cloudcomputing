import React, { useContext, useState } from "react";
import styled from "styled-components";
import TextInput from "./Textinput";
import { ImageContext } from "./ImageContext";
import { useNavigate } from "react-router-dom";

function Calender2() {
  const { imageSrc, setImageSrc } = useContext(ImageContext);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleDeleteImage = () => {
    setImageSrc(null);
    navigate("/calender");
  };

  const handleSave = () => {
    console.log("일기 내용:", text);
    if (imageSrc) {
      console.log("첨부된 이미지:", imageSrc);
    } else {
      console.log("이미지가 첨부되지 않았습니다");
    }
  };

  // const handleTextChange = (e) => {
  //   setText(e.target.value);
  // }

  return (
    <PageContainer>
      <ContentContainer>
        <Title>오늘의 일기</Title>

        <TextInput text={text} setText={setText} imageSrc={imageSrc} />
        <ButtonWrapper>
          <StyledButton onClick={handleDeleteImage}>사진 삭제하기</StyledButton>
          <StyledButton onClick={handleSave}>저장</StyledButton>
        </ButtonWrapper>
      </ContentContainer>
    </PageContainer>
  );
}

export default Calender2;

const PageContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  max-height: 96vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #ffffff;
  margin-top: 12px;
`;

const ContentContainer = styled.div`
  width: 80vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: #ccc8e3a6;
  border-radius: 14px;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 500px) {
    padding: 154px;
  }
`;

const Title = styled.h1`
  font-size: 5W;
  font-weight: 600;
  justify-content: center;
  margin: 0;
  align-self: flex-start;
  margin-left: 40px;
  text-align: left;
  width: 100%;
  margin-top: 5px;

  @media (max-width: 769px) {
    font-size: 8vw;
    margin-top: 5vh;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  position: absolute;
  bottom: 20px;
  transform: traslateX(-50%);
`;

const StyledButton = styled.button`
  width: 150px; /* 버튼 너비 조정 */
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #ffffff;
  color: black;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 40px;
  margin-right: 40px;
  justify-content: space-between;
  @media (mnax-width: 600px) {
    wodth: 40%;
    font-size: 14px;
  }
`;
