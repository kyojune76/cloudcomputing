import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 10px 0px 0px 0px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: black;
  outline: none;
  cursor: pointer;
  background: #ffffff;
  width: 49px;
  opacity: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Button({ title, onClick }) {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
}

Button.defaultProps = {
  title: "Button",
};

export default Button;
