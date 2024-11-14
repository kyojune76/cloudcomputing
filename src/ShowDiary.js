import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import TextInput from "./Textinput";
import { ImageContext } from "./ImageContext";
import { useLocation, useNavigate } from "react-router-dom";

function ShowDiary({ isEditing = false, onSave }) {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const { state } = useLocation();
  const { imageSrc, setImageSrc } = useContext(ImageContext) || {};
  const [text, setText] = useState("");

  // 파일 탐색기 열기

  // 파일 선택 후 처리
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      setText((prevText) => prevText + `<img src="${imageUrl}" alt="" />`);
    }
  };

  // 저장 처리
  const DiaryFix = () => {
    navigate("/Calender2");
  };

  return (
    <PageContainer>
      <ContentContainer>
        <Title>오늘의 일기</Title>
        <TextInput text={text} setText={() => {}} imageSrc={imageSrc} />
        {imageSrc && <img src={imageSrc} alt="첨부된 이미지" />}
        <ButtonWrapper>
          <StyledButton onClick={DiaryFix}>수정하러가기</StyledButton>
          <StyledButton>업로드하기</StyledButton>
        </ButtonWrapper>
        <input
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

export default ShowDiary;

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
