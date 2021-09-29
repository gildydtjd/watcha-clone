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
  margin-right: 3%;
`;

function Header() {
  return (
    <HeaderDiv>
      <Logo>WATCHA</Logo>
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', width: '88%' }}
      >
        <LoginBox>회원가입</LoginBox>
      </div>
    </HeaderDiv>
  );
}

export default Header;
