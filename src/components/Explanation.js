import React from "react";
import styled from "styled-components";

const ExplationDiv = styled.div`    
    width: 34vw;
        top: 71px;
    text-align: initial;
    position: absolute;
    display: block;
    right: 177px;
    color: white;
    left: 58vw;
    height: 251px;
}`;

const H1css = styled.h1`
  font-family: "Press Start 2p";
  font-style: normal;
  font-weight: normal;
  font-size: 80px;
  line-height: 80px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
  z-index: 2;
`;

const H2css = styled.h2`
  z-index: 1;
  position: absolute;
  /* top: 85.9px; */
  font-family: Archivo Black;
  font-style: normal;
  font-weight: normal;
  font-size: 3vw;
  line-height: 49px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
`;

const H3Css = styled.h3`
  position: relative;
  line-height: 25px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 700;
  top: 112px;
  margin: 0;
  z-index: 1;
`;

const Explanation = () => {
  return (
    <ExplationDiv>
      <H1css>coco</H1css>
      <H2css>
        Awesome colors
        <br /> for creative design!
      </H2css>
      <H3Css>
        Browse and test the cool color palette that are
        <br /> loved by designer with Coco Color!
      </H3Css>
    </ExplationDiv>
  );
};

export default Explanation;
