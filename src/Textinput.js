import React from "react";
import styled from "styled-components";


function TextInput({ text, setText, imageSrc }) {
  const handleTextChange = (e) => {
    setText(e.currentTarget.innerHTML);
  };



  const handleAddImage = () => {
    const contentEditableDiv = document.getElementById("contentEditableDiv")
    contentEditableDiv.focus();
    const imgTag = `<img src="${imageSrc}" alt="첨부된 이미지" style="width: 100%; max-height: 300px; object-fit: cover;" />`;
    document.execCommand("insertHIML", false, imgTag);
  };

  return (
    <Container>

      <TitleInput placeholder="일기 제목" autoFocus />
      <ContentInputWrapper>
        <ContentInput
          id="contentEditableDiv"
          contentEditable={true}
          onInput={handleTextChange}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        {imageSrc && <AddImageButton onClick={handleAddImage}></AddImageButton>}
      </ContentInputWrapper>
    </Container>
  );
}

export default TextInput;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top:30px;
  margin-bottom: 20px;
  justify-content: center;

`;

const TitleInput = styled.textarea`
  width: 60vh;
  height: 60px;
  padding: 0.5rem;
  font-size: 0.9rem;
  resize: none;
  border: none;
  border-radius: 14px;
  background-color: #ffff;
  outline: none;
  justify-content: center;

`;


const ContentInputWrapper = styled.div`
  width: 100vh;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

`

const ContentInput = styled.div`
  width:60vh;
  min-height: 340px;
  max-height: 340px;
  padding: 0.5rem;
  font-size: 0.9rem;
  resize: none;
  border: none;
  border-radius: 14px;
  background-color: #fff;
  outline:none;
  margin-left: 130px;
  word-wrap: break-word;
  overflow-y: auto;
  white-space: pre-wrap;
`;



const AddImageButton = styled.img`
  margin-top: 10px;
  padding: 8px 12px;
  font-size: 16px;
  cursor: pointer;
  
`;