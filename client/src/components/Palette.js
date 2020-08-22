import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import ColorList from "./ColorList";

const Palette = (color) => {
  const [userLikes, setUserLikes] = useState([]);
  const { _id, color1, color2, color3, color4, likes } = color.color;

  const likeUp = (id, currentLikes) => {
    axios
      .put(`http://localhost:3001/api/Pallette/${id}`, {
        likes: currentLikes + 1,
      })
      .then(console.log(userLikes));
  };

  return (
    <UlCss key={_id}>
      <ColorList color={color1} />
      <ColorList color={color2} />
      <ColorList color={color3} />
      <ColorList color={color4} />

      <LikeDiv>
        <ButtonCss
          onClick={() => likeUp(_id, likes)}
          // style={{ color: color.liked ? " #d54062" : "#1d2737" }}
        >
          <AiFillHeart />
          <LikeText>{likes}</LikeText>
        </ButtonCss>
      </LikeDiv>
    </UlCss>
  );
};

const UlCss = styled.ul`
  background: ghostwhite;
  margin-right: 4vw;
  list-style: none;
  font-size: 15px;
  color: white;
  font-weight: 400;
  margin-right: 20px;
  height: 220px;
  width: 195px;
  box-shadow: 0px 1px 19px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 5px 12px;
`;

const ButtonCss = styled.button`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  width: 65px;
  color: #1d2737;
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

  &:focus {
    color: #d54062;
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
  color: #1d2737;
  font-size: 17px;
  font-weight: 600;
  position: relative;
  margin: 0;
  margin-left: 6px;
`;

export default Palette;
