import React from "react";
import styled from "styled-components";

function TextInput({ text, setText, imageSrc }) {
  return (
    <Container>
      {/* 텍스트 입력 영역 */}
      <TitleInput
        placeholder="일기 제목을 입력하세요"
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)} // 텍스트 상태 업데이트
      />

      {/* 이미지가 있으면 이미지 박스에 표시 */}
      {imageSrc && (
        <ImageBox>
          <StyledImage src={imageSrc} alt="첨부된 이미지" />
        </ImageBox>
      )}
    </Container>
  );
}

export default TextInput;

// 스타일링 정의
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
  justify-content: center;
`;

const TitleInput = styled.textarea`
  width: 60vh;
  height: 60px;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 14px;
  background-color: #fff;
  outline: none;
  resize: none;
`;

const ImageBox = styled.div`
  width: 60vh;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 14px;
  overflow: hidden; /* 이미지를 박스 밖으로 넘치지 않게 */
  background-color: #f9f9f9;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain; /* 이미지 비율 유지하며 박스 안에 맞춤 */
`;
