import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const LandingTest = () => {
  const [colors, setColors] = useState([]);

  // Axios get Palettes
  useEffect(() => {
    axios
      .get("http://localhost:3001/api")
      .then((response) => listRender(response.data));
  }, []);

  const listRender = (paletteList) => {
    setColors(paletteList);
  };

  const colorList = colors.map((color) => (
    <UlCss>
      <LiCss>{color.color1}</LiCss>
      <LiCss>{color.color2}</LiCss>
      <LiCss>{color.color3}</LiCss>
      <LiCss>{color.color4}</LiCss>
    </UlCss>
  ));

  return <ListDiv>{colorList}</ListDiv>;
};
const ListDiv = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 59vh;
  z-index: 2;
    right: -10vw;
}


`;

const UlCss = styled.ul`
  background: ghostwhite;
  margin-right: 4vw;
  list-style: none;
  font-size: 15px;
  color: white;
  font-weight: 400;
  margin-right: 93px;
  height: 170px;
  width: 130px;
  box-shadow: 13px 17px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
`;

const LiCss = styled.li`
  transform: translateX(-18px);
  color: #393939;
  font-weight: bold;
  font-size: 23px;
`;

export default LandingTest;
