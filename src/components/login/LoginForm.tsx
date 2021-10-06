/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SosialLogin from './SosialLogin';

interface spanType {
  size: string;
}

interface checkImgType {
  dis: string;
}

interface loginType {
  color: string;
}

const LoginDiv = styled.div<loginType>`
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginBox {
    padding: 20px;
    .loginLink {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) =>
        props.color ? props.color : 'rgb(248, 47, 98)'};
      width: 300px;
      height: 50px;
      border-radius: 40px;
      font-weight: 800;
      border: none;
      color: #fff;
      text-decoration: none;
      margin: 0 auto;
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
    border: 0.2px solid #c9c9c9;
  }
`;

const CheckImg = styled.div<checkImgType>`
  background-image: url('/assets/img/check.svg');
  width: 20px;
  height: 20px;
  position: absolute;
  display: ${(props) => (props.dis ? props.dis : 'none')};
  margin-top: 15px;
  right: 5%;
`;

function LoginForm() {
  const [checkdis, setCheckdis] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginColor, setLoginColor] = useState('');

  const validateEmail = (mail: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    const vali = validateEmail(email);
    vali ? setCheckdis('relative') : setCheckdis('none');
    vali ? setLoginColor('#008d62') : setLoginColor('rgb(248, 47, 98)');
  }, [email]);

  return (
    <LoginDiv color={loginColor}>
      <div className="loginBox">
        <LoginSpan size="20px">로그인</LoginSpan>
        <LoginSpan size="">비밀번호를 잊어버리셨나요?</LoginSpan>
        <InputDiv>
          <CheckImg dis={checkdis} />
          <input
            type="text"
            placeholder="email"
            onChange={onChangeEmail}
          ></input>
          <input
            type="text"
            placeholder="password"
            onChange={onChangePass}
          ></input>
        </InputDiv>
        <Link to={'/main/' + email + '/' + password} className="loginLink">
          로그인
        </Link>
        <SosialLogin />
      </div>
    </LoginDiv>
  );
}

export default LoginForm;
