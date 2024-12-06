import React, { useContext, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import TextInput from "./Textinput"; // TextInput 컴포넌트
import { ImageContext } from "./ImageContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function ShowDiary() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const { state } = useLocation();
  const { setImageSrc } = useContext(ImageContext) || {};
  const [text, setText] = useState(state?.text || "");
  const [localImageSrc, setLocalImageSrc] = useState(null);
  const diaryId = state?.id || null; // ID를 포함하여 수정 처리

  // 서버에서 이미지 가져오기
  useEffect(() => {
    const fetchImage = async () => {
      if (state?.imageSrc) {
        // 서버 이미지가 이미 state에 있는 경우
        setLocalImageSrc(state.imageSrc);
      } else if (diaryId) {
        try {
          const response = await axios.get(
            `http://43.201.103.60:8080/image/${diaryId}`, // 서버에서 이미지를 가져오는 API
            { responseType: "blob" } // Blob 형식으로 이미지 받아오기
          );
          const imageUrl = URL.createObjectURL(response.data);
          setLocalImageSrc(imageUrl);
        } catch (error) {
          console.error("이미지를 가져오는 데 실패했습니다:", error);
        }
      }
    };

    fetchImage();
  }, [diaryId, state?.imageSrc]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setLocalImageSrc(imageUrl);
    }
  };

  // 수정 모드로 Calender.js로 이동
  const goToEditMode = () => {
    navigate("/Calender", {
      state: { id: diaryId, text, imageSrc: localImageSrc, editMode: true },
    });
  };

  // 수정 취소 후 목록으로 돌아가기
  const goToUpload = () => {
    navigate("/ThirdPage", {
      state: { updatedDiary: { id: diaryId, text, imageSrc: localImageSrc } },
    });
  };

  return (
    <PageContainer>
      <ContentContainer>
        <Title>오늘의 일기</Title>
        <TextInput text={text} setText={setText} imageSrc={localImageSrc} />
        {/* 하얀 박스 안에 이미지 표시 */}
        <ButtonWrapper>
          <StyledButton onClick={goToEditMode}>수정하러가기</StyledButton>
          <StyledButton onClick={goToUpload}>취소</StyledButton>
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

// 스타일링
const PageContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7; /* 연한 회색 배경 */
`;

const ContentContainer = styled.div`
  width: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff; /* 흰색 배경 */
  border-radius: 14px;
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledButton = styled.button`
  flex: 1;
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #e0e0e0; /* 버튼 배경 회색 */
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: #333;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d6d6d6;
  }
`;
