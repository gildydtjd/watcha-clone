import React from 'react';
import styled from 'styled-components';

const SosialLoginDiv = styled.div`
  padding: 10px;
  border-top: 1px solid #fff;
  width: 300px;
  margin: 0 auto;
  margin-top: 20px;
  text-align: left;
  span {
    font-size: 10px;
    color: #fff;
    font-weight: 800;
  }
  div {
    display: flex;
    margin: 10px 5px;
    cursor: pointer;
  }
`;

interface sosialType {
  background: string;
}

const SosialLogoDiv = styled.div<sosialType>`
  background-image: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  width: 35px;
  height: 35px;
`;

const sosialLogo = ['facebook.svg', 'google.svg', 'twitter.svg'];

const sosialLender = sosialLogo.map((s) => {
  return <SosialLogoDiv background={'/assets/img/' + s} />;
});
function SosialLogin() {
  return (
    <SosialLoginDiv>
      <span>다른 방법으로 로그인하기</span>
      <div>{sosialLender}</div>
    </SosialLoginDiv>
  );
}

export default SosialLogin;
