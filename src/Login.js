import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Loggin() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const HandleLogin = async () => {
    try {
      // 로그인 요청 보내기
      const response = await axios.post(
        "http://43.201.103.60:8080/auth/login", // 백엔드 로그인 API URL
        { userId, password },
        {
          headers: {
            "Content-Type": "application/json", // JSON 형식 요청
          },
        }
      );

      console.log("로그인 응답 데이터:", response.headers.authorization);

      // 서버가 JWT 토큰을 반환했다고 가정
      const token = response.headers.authorization;
      localStorage.setItem("jwt", token); // JWT 토큰을 로컬스토리지에 저장
      if (localStorage.getItem("jwt")) {
        alert("로그인 성공!");
        console.log("navigate 호출 준비"); // 디버깅 로그
        navigate("/ThirdPage"); // 인증 성공 시 이동
        console.log("navigate 호출 완료"); // 디버깅 로그
      } else {
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("로그인 실패 상태 코드:", error.response?.status);
      console.error("에러 메시지:", error.response?.data || error.message);
      alert(
        error.response?.data?.errorMessage ||
          "아이디 또는 비밀번호가 잘못되었습니다."
      );
    }
  };

  return (
    <div>
      <Login>
        <InputContainer>
          <Title>로그인</Title>
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
        <Button onClick={HandleLogin}>로그인</Button>
      </Login>
    </div>
  );
}

export default Loggin;

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
  margin-top: 250px;
  border-style: hidden;
  background-color: #ffffff;
  color: black;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
`;
