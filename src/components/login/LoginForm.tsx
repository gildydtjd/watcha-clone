import React from 'react';
import styled from 'styled-components';
import SosialLogin from './SosialLogin';

interface spanType {
  size: string;
}

interface CheckImgType {
  dis: string;
}

const LoginFormDiv = styled.div<spanType>`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    padding: 20px;
    button {
      background-color: rgb(248, 47, 98);
      width: 300px;
      height: 50px;
      border-radius: 40px;
      font-weight: 800;
      color: #fff;
      border: none;
    }
  }
`;

const LoginSpan = styled.span<spanType>`
  color: #fff;
  font-size: ${(props) => (props.size ? props.size : '12px')};
  font-weight: 800;
  margin: 0px 30px;
  cursor: pointer;
`;

const InputDiv = styled.div`
  margin: 15px 0px;
  position: relative;
  width: 300px;
  left: 5%;
  input {
    padding: 0px 20px;
    display: block;
    width: 300px;
    height: 50px;
    border-radius: 5px;
    border: 0.5px solid #c9c9c9;
  }
`;

const CheckImg = styled.div<CheckImgType>`
  background-image: url('/assets/img/check.svg');
  width: 20px;
  height: 20px;
  position: absolute;
  display: ${(props) => (props.dis === 'none' ? 'none' : 'relative')};
  margin-top: 15px;
  right: 5%;
`;

function LoginForm() {
  const checkdis = 'none';
  return (
    <LoginFormDiv size="1">
      <form>
        <LoginSpan size="20px">로그인</LoginSpan>
        <LoginSpan size="">비밀번호를 잊어버리셨나요?</LoginSpan>
        <InputDiv>
          <CheckImg dis={checkdis} />
          <input type="text" placeholder="email"></input>
          <input type="text" placeholder="password"></input>
        </InputDiv>
        <button>로그인</button>
        <SosialLogin />
      </form>
    </LoginFormDiv>
  );
}

export default LoginForm;
