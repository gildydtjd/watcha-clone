import styled from 'styled-components';
import Header from '../components/header/Header';
import LoginForm from '../components/login/LoginForm';
const LoginDiv = styled.div`
  height: 100vh;
  background-image: url('/assets/img/login.jpg');
  background-size: cover;
  background-position: center;
`;
function Login() {
  return (
    <LoginDiv>
      <Header />
      <LoginForm />
    </LoginDiv>
  );
}

export default Login;
