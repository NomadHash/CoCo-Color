import React from "react";
import styled from "styled-components";

const HeaderTitle = styled.h1`
  margin: 0;
  width: 896px;
  height: 33px;
  left: -191px;
  /* top: 126.5px; */
  font-family: Archivo Black;
  font-style: normal;
  font-weight: lighter;
  font-size: 25px;
  line-height: 109px;
  color: #5d5d5d;
  position: absolute;
  top: -27px;
`;

const HeaderDiv = styled.div`
  top: 0;
  display: block;
  position: fixed;
  width: 100vw;
  background: #ffffff;
  box-shadow: 13px 1px 5px rgba(0, 0, 0, 0.25);
  height: 57px;
  z-index: 2;
`;

const Header = () => {
  return (
    <HeaderDiv>
      {/* <FakeDiv></FakeDiv>
      <FakeDiv2></FakeDiv2> */}
      <HeaderTitle> &lt;coco-Color&gt;</HeaderTitle>
    </HeaderDiv>
  );
};

export default Header;
