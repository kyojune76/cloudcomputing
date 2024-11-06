import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();

  const HandleLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <Login>
        <InputContainer>
          <Title>BMillion</Title>
          <Input type="text" placeholder="아이디" />
          <Input type="password" placeholder="패스워드" />
        </InputContainer>
        <Button onClick={HandleLogin}>회원가입</Button>
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
