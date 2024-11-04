import styled from "styled-components";

function App() {
  return (
    <div>
      <Login>
        <Button position="bottom">회원가입</Button>
      </Login>
    </div>
  );
}

export default App;
const Login = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: #50150150;
`;
const Button = styled.button`
  width: 500px;
  margin-top: 500px;
  margin-bottom: 100px;
  height: 50px;
  border-style: hidden;
`;
