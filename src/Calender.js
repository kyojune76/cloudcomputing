import styled from "styled-components";
import TextInput from "./Textinput";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { ImageContext } from "./ImageContext";

function Calender() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const { imageSrc, setImageSrc } = useContext(ImageContext) || {};
  const [text, setText] = useState("");

  //파일 탐색기 열기
  const handleAddImage = () => {
    fileInputRef.current.click();
  };

  //파일 선택 후 처리
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      setText((prevText) => prevText + `<img src="${imageUrl}" alt`);
    }
  };

  // //택스트 입력 처리
  // const handleTextChange = (e) => {
  //   setText(e.target.value);
  // }

  //저장 처리(다음 페이지러 텍스트, 이미지 함께 전송)
  const handleSave = () => {
    navigate("/calender2", { state: { text, imageSrc } });
  };

  return (
    <PageContainer>
      <ContentContainer>
        <Title>오늘의 일기</Title>
        {/*textImput 텍스트 수정*/}
        <TextInput text={text} setText={setText} imageSrc={imageSrc} />

        <ButtonWrapper>
          <StyledButton onClick={handleAddImage}>사진 첨부하기</StyledButton>
          <StyledButton onClick={handleSave}>저장</StyledButton>
        </ButtonWrapper>
        {/*이미지 첨부 input(숨겨진 파일 선택 창) */}
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

export default Calender;

const PageContainer = styled.div`
  width: 100%;
  min-height: auto;
  max-height: auto;
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
  background-color: #ccc8e3a6;
  border-radius: 14px;
  position: relative;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 500px) {
    padding: 154px;
  }
`;

const Title = styled.h1`
  font-size: 5W;
  font-weight: 600;
  margin: 0;
  align-self: flex-start;
  margin-top: 6vh;
  margin-left: 40px;
  text-align: left;
  width: 100%;

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
  @media (max-width: 600px) {
    wodth: 40%;
    font-size: 14px;
  }
`;
