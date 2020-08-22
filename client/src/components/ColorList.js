import React from "react";
import styled, { keyframes } from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorList = (color) => {
  return (
    <LiCss>
      <ListColor1 background={color.color}>
        <CopyToClipboard text={color.color}>
          <Wrapper>
            <ColorCode>{color.color}</ColorCode>
            <CopyMesg>
              Copied!<Square></Square>
            </CopyMesg>
          </Wrapper>
        </CopyToClipboard>
      </ListColor1>
    </LiCss>
  );
};
const boxFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const textFade = keyframes`

0% {
    display: block;  
    opacity: 0;
  }
  50% {
      display: block;  
    opacity: 1;
  }
  100% {
      display: none;  
    opacity: 0;
  }
 
`;

const ListColor1 = styled.div`
  background: ${(color) => color.background || "black"};
  font-size: 13px;
  // padding: 15px 0px;
  // border-radius: 15px 15px 1px 1px ;
`;

const LiCss = styled.li`
  color: white;
  font-weight: bold;
  font-size: 31px;
`;

const ColorCode = styled.button`
  opacity: 0;
  font-size: 15px;
  font-weight: bold;
  color: seashell;
  // box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.3);
  padding: 23px 120px 5px 0px;
  background: rgba(0, 0, 0, 0.25);
  border: none;
  width: -webkit-fill-available;
  outline: none;

  &:hover {
    animation: ${boxFade} 0.6s forwards;
  }
  // &:active {
  //   transform: translateY(2px);
  //   box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
  // }
`;

const CopyMesg = styled.div`
  height: 14px;
    display: none;
    position: absolute;
    -webkit-transform: translate(86px,-5px);
    -ms-transform: translate(86px,-5px);
    transform: translate(86px,-5px);
    background: #2c394f;
    padding: 7px 13px 4px 9px;
    border-radius: 7px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
}
`;

const Wrapper = styled.div`
  & ${ColorCode}:focus + ${CopyMesg} {
    display: block;
    animation: ${textFade} 1s forwards;
  }
`;

const Square = styled.div`
  top: -28px;
  transform: rotate(45deg);
  background: #2c394f;
  position: relative;
  width: 12px;
  height: 12px;
  right: -5px;
`;

export default ColorList;
