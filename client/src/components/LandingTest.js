import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";

const LandingTest = () => {
  const [colors, setColors] = useState([]);

  // Axios get Palettes
  useEffect(() => {
    axios
      .get("http://localhost:3001/api")
      .then((response) => listRender(response.data));
  }, []);

  const likeUp = () => {
    axios
      .put("http://localhost:3001/api/Pallette/5f34af7505410330087de0b7", {
        likes: 2,
      })
      .then(console.log("like!"));
  };
  const listRender = (paletteList) => {
    setColors(paletteList);
  };

  const colorList = colors.map((color) => (
    <UlCss>
      <LiCss>
        <ListColor1 background={color.color1}>
          <ColorCode>{color.color1}</ColorCode>
        </ListColor1>
      </LiCss>
      <LiCss>
        <ListColor2 background={color.color2}>
          <ColorCode>{color.color2}</ColorCode>
        </ListColor2>
      </LiCss>
      <LiCss>
        <ListColor3 background={color.color3}>
          <ColorCode>{color.color3}</ColorCode>
        </ListColor3>
      </LiCss>
      <LiCss>
        <ListColor4 background={color.color4} mouseOn={"s"}>
          <ColorCode>{color.color4}</ColorCode>
        </ListColor4>
      </LiCss>
      <LikeDiv>
        <ButtonCss onClick={likeUp}>
          <AiFillHeart />
          <LikeText>{color.likes}</LikeText>
        </ButtonCss>
      </LikeDiv>
    </UlCss>
  ));

  return <ListDiv>{colorList}</ListDiv>;
};

const ListColor1 = styled.div`
  background: ${(props) => props.background || "black"};
    font-size: 13px;
    padding: 27px 0px;
    border-radius: 15px 15px 1px 1px ;
}
}
`;
const ListColor2 = styled.div`
  background: ${(props) => props.background || "black"};
    font-size: 13px;
    padding: 17px 0px;
}
}
`;
const ListColor3 = styled.div`
  background: ${(props) => props.background || "black"};
    font-size: 13px;
    padding: 7px 0px;
}
}
`;
const ListColor4 = styled.div`
  background: ${(props) => props.background || "black"};
    font-size: 13px;
    padding: 10px 0px;
    border-radius: 0px 0px 15px 15px;
}
}
`;

const ListDiv = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 90px;
  z-index: 2;
  width: 80vw;
  flex-wrap: wrap;
  display: flex;
  margin-left: 80px;
`;

const UlCss = styled.ul`
  background: ghostwhite;
  margin-right: 4vw;
  list-style: none;
  font-size: 15px;
  color: white;
  font-weight: 400;
  margin-right: 20px;
  height: 275px;
  width: 232px;
  box-shadow: 4px 5px 2px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  padding: 4px 17px;
`;

const LiCss = styled.li`
  color: white;
  font-weight: bold;
  font-size: 31px;
`;

const ButtonCss = styled.button`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  width: 65px;
  color: #ff4f4f;
  border-radius: 7px;
  background: none;
  font-size: 19px;
  position: absolute;
  left: 0;
  text-align: left;
  outline: none;
      display: flex;
    flex-direction: row;
    align-items: center;
}
  &:active {
    box-shadow: 0 2px grey;
    transform: translateY(3px);
  }
`;

const LikeDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 41px;
  position: relative;
`;

const LikeText = styled.h2`
  color: #353535;
  font-size: 17px;
  font-weight: 600;
  position: relative;
  margin: 0;
  margin-left: 6px;
`;

const ColorCode = styled.h3`
  opacity: 0;
  margin: 0;
  font-size: 15px;
  font-weight: 400;
  /* background: rgba(0,0,0,-0.8); */
  box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.25);
  top: 31px;
  padding: 10px 170px 0px 1px;
  background: rgba(0, 0, 0, 0.15);
  &:hover {
    opacity: 1;
  }
`;

export default LandingTest;
