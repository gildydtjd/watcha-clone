import styled from 'styled-components';

const HeaderDiv = styled.div`
  height: 72px;
  position: sticky;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.div`
  padding: 20px;
  color: red;
  font-weight: 800;
  font-size: 22px;
  cursor: pointer;
  margin-left: 3%;
`;

const LoginBox = styled.div`
  padding: 10px 15px;
  background-color: #fff;
  color: black;
  border-radius: 40px;
  font-weight: 800;
  font-size: 13px;
  margin-left: 83%;
`;

function Header() {
  return (
    <HeaderDiv>
      <Logo>WATCHA</Logo>
      <LoginBox>회원가입</LoginBox>
    </HeaderDiv>
  );
}

export default Header;
