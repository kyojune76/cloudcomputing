import React, { useContext, useState } from "react";
import styled from "styled-components";
import Calender from "./Calender";

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
    <div>
      <Calender isEditing={true} onSave={handleSave} />
      <button onClick={handleDeleteImage}>사진 삭제하기</button>
    </div>
  );
}

export default Calender2;
