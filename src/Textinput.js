import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const TitleInput = styled.textarea`
  width: 796px;
  height: 60px;

  padding: 0.5rem;
  font-size: 1.2rem;
  resize: none;
  border: 1px solid #8f8e8b;
  border-radius: 5px;
`;

const ContentInput = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  height: 200px;
  resize: none;
  border: 1px solid #8f8e8b;
  border-radius: 5px;
`;
function TextInput({ placeholderTItle, placeholderContent }) {
  return (
    <Container>
      <TitleInput placeholder={(placeholderTItle = "제목")} autoFocus />
      <ContentInput placeholder={placeholderContent} />
    </Container>
  );
}

export default TextInput;
