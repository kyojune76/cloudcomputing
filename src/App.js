import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function App() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const HandleSignUp = async () => {
    try {
      // 회원가입 요청
      const response = await axios.post(
        "http://43.201.103.60:8080/auth/register", // 실제 API 엔드포인트로 변경
        {
          userId,
          password,
        }
      );

      console.log("회원가입 성공:", response.data);
      alert("회원가입이 완료되었습니다!");

      // 로그인 페이지로 이동
      navigate("/login");
    } catch (error) {
      console.error("회원가입 실패:", error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };
  return (
    <div>
      <Login>
        <InputContainer>
          <Title>BMillion</Title>
          <Input
            type="text"
            placeholder="아이디"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <Input
            type="password"
            placeholder="패스워드"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <Button onClick={HandleSignUp}>회원가입</Button>
      </Login>
    </div>
  );
}

export default App;

const Login = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #ccc8e3a6;
`;
const Title = styled.div`
  color: black;
  font-style: bold;
  font-size: 30px;
`;
const InputContainer = styled.div`
  position: absolute;
  top: 20%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Input = styled.input`
  width: 500px;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: white;
`;

const Button = styled.button`
  width: 500px;
  height: 50px;
  margin-top: 250px; /* 버튼을 입력란 아래로 배치 */
  border-style: hidden;
  background-color: #ffffff;
  color: black;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
`;
