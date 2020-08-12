import React from "react";
import styled from "styled-components";

const HeaderTitle = styled.h1`
  position: absolute;
  width: 779px;
  height: 118px;
  left: -328px;
  top: 181.5px;
  font-family: Archivo Black;
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 109px;
  color: #f8f8f8;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
`;

const HeaderDiv = styled.div`
  display: block;
  position: relative;
  width: 359px;
  background: #1d5d7d;
  height: 100vh;
`;

const FakeDiv = styled.div`
  right: -24vw;
  position: absolute;
  border-radius: 50%;
  background: #1d5d7d;
  width: 800px;
  height: 800px;
  top: -15vw;
`;

const FakeDiv2 = styled.div`
    right: -594px;
    position: absolute;
    border-radius: 50%;
    background: #393939;
    width: 800px;
    height: 800px;
    top: 130px;
}
`;

const Header = () => {
  return (
    <HeaderDiv>
      <FakeDiv></FakeDiv>
      <FakeDiv2></FakeDiv2>
      <HeaderTitle> &lt;coco-Color&gt;</HeaderTitle>
    </HeaderDiv>
  );
};

export default Header;
