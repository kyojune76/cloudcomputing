import styled from "styled-components";
import Day from "./Day";
import TextInput from "./Textinput";
import Button from "./Button";
function Calender() {
  const handleAddImage = () => {
    console.log("사진 첨부가 되었습니다.");
  };

  const handleSave = () => {
    console.log("저장");
  };
  return (
    <PageContainer>
      <ContentContainer>
        <h1>오늘의 일기</h1>
        <Day />
        <TextInput />
      </ContentContainer>
      <ButtonContainer>
        <Button title="사진 첨부하기" onClick={handleAddImage} />
        <Button title="저장" onClick={handleSave} />
      </ButtonContainer>
    </PageContainer>
  );
}

export default Calender;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 150px;
  width: 100%;
  height: 100%;
  background-color: #ccc8e3a6;
  position: relative;
`;

const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 20px;
`;
