import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Palette from "./Palette";

const PalettesArea = () => {
  useEffect(() => {
    getPaletts();
  }, []);

  const [colors, setColors] = useState([]);

  const getPaletts = () => {
    axios.get("http://localhost:3001/api").then((response) => {
      setColors(response.data);
    });
  };

  const PaletteList = colors.map((color) => (
    <Palette key={color._id} color={color} />
  ));

  return <ListDiv>{PaletteList}</ListDiv>;
};

// Styled-Component

const ListDiv = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 90px;
  z-index: 2;
  width: 86.5vw;
  flex-wrap: wrap;
  display: flex;
`;

export default PalettesArea;
