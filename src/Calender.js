import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import TextInput from "./Textinput";
import { ImageContext } from "./ImageContext";
import { useNavigate } from "react-router-dom";

function Calender({ isEditing = false, onSave }) {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const { imageSrc, setImageSrc } = useContext(ImageContext) || {};
  const [text, setText] = useState("");

  const handleAddImage = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      setText((prevText) => prevText + `<img src="${imageUrl}" alt="" />`);
    }
  };

  const handleSave = () => {
    if (onSave) {
      onSave(text, imageSrc);
    } else {
      navigate("/ShowDiary", { state: { text, imageSrc } });
    }
  };

  return (
    <PageContainer>
      <ContentContainer>
        <Title>오늘의 일기</Title>

        <TextInput text={text} setText={setText} imageSrc={imageSrc} />

        <ButtonWrapper>
          <StyledButton onClick={handleAddImage}>
            {isEditing ? "이미지 수정" : "사진 첨부하기"}
          </StyledButton>
          <StyledButton onClick={handleSave}>
            {isEditing ? "수정 완료" : "저장"}
          </StyledButton>
        </ButtonWrapper>
        <Input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
          accept="image/*"
        />
      </ContentContainer>
    </PageContainer>
  );
}

export default Calender;

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
const Input = styled.input`
  width: 70vh;
  height: 1vh;
  position: relative;
  padding: 30px;
  font-size: 16px;
  border: 1px solid #ccc;
  margin-top: 50px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: white;
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
  width: 150px;
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
