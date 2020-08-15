import React from "react";
import styled from "styled-components";
import img from "./1.png";

const ExplationDiv = styled.div`
  width: 18vw;
  top: 96px;
  text-align: initial;
  position: fixed;
  display: block;
  right: 187px;
  color: gray;
  left: 82vw;
  height: 97vh;
`;

const H2css = styled.h2`
  z-index: 1;
  font-weight: ;
  font-weight: 400;
  font-size: 1.7vw;
  line-height: 28px;
  color: #565656;

  margin: 0;
  margin-bottom: 18px;
`;

const H3Css = styled.h3`
  line-height: 25px;
  color: #565656;
  font-weight: 700;
  top: 112px;
  margin: 0;
  z-index: 1;
  width: 14vw;
`;

const ImgCss = styled.img`
  display: block;
  width: 15vw;
  border-radius: 28px;
  margin-top: 25px;
`;

const InputCss = styled.input`
  font-size: 17px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  padding: 7px 21px 7px 5px;
  border-radius: 7px;
  outline: none;
  border: 2px solid #f5f7f9;
  margin-bottom: 18px;
`;

const Explanation = () => {
  return (
    <ExplationDiv>
      <InputCss placeholder="Search Palettes"></InputCss>
      <H2css>
        Awesome colors
        <br /> for creative design!
      </H2css>
      <H3Css>
        Browse and test the cool color palette that are loved by designer with
        Coco Color!
      </H3Css>
      <ImgCss src={img} />
    </ExplationDiv>
  );
};

export default Explanation;
