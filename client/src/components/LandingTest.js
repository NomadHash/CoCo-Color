import React, { useEffect, useState } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";

const LandingTest = () => {
  const [colors, setColors] = useState([]);
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState([]);
  const virtualLikes = [...likes];
  let virtualLiked = [];

  const getPaletts = () => {
    axios.get("http://localhost:3001/api").then((response) => {
      setColors(response.data);
      setLikes(
        response.data.map((data) => {
          return data.likes;
        })
      );
      // setLiked(JSON.parse(localStorage.getItem(1)));
    });
  };

  const getLocalData = () => {
    let arr = [];
    const keys = Object.keys(localStorage);
    for (let i = 0; i < localStorage.length; i++) {
      arr.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    setLiked(arr);
  };

  // Axios get Palettes
  useEffect(() => {
    getPaletts();
    getLocalData();
  }, []);

  const likeUp = (id, currentLikes, idx) => {
    axios
      .put(`http://localhost:3001/api/Pallette/${id}`, {
        likes: currentLikes + 1,
      })
      .then(virtualLikes.splice(idx, 1, currentLikes + 1))
      .then(setLikes(virtualLikes));

    localStorage.setItem(idx, JSON.stringify([idx, id]));
    let rs = virtualLiked.concat(JSON.parse(localStorage.getItem(idx)));
    setLiked(rs);
  };

  const colorList = colors.map((color, idx) => (
    <UlCss key={color._id}>
      <LiCss>
        <ListColor1 background={color.color1}>
          <CopyToClipboard text={color.color1}>
            <Wrapper>
              <ColorCode>{color.color1}</ColorCode>
              <CopyMesg>
                Copied!<Square></Square>
              </CopyMesg>
            </Wrapper>
          </CopyToClipboard>
        </ListColor1>
      </LiCss>
      <LiCss>
        <ListColor2 background={color.color2}>
          <CopyToClipboard text={color.color2}>
            <Wrapper>
              <ColorCode>{color.color2}</ColorCode>
              <CopyMesg>
                Copied!<Square></Square>
              </CopyMesg>
            </Wrapper>
          </CopyToClipboard>
        </ListColor2>
      </LiCss>
      <LiCss>
        <ListColor3 background={color.color3}>
          <CopyToClipboard text={color.color3}>
            <Wrapper>
              <ColorCode>{color.color3}</ColorCode>
              <CopyMesg>
                Copied!<Square></Square>
              </CopyMesg>
            </Wrapper>
          </CopyToClipboard>
        </ListColor3>
      </LiCss>
      <LiCss>
        <ListColor4 background={color.color4}>
          <CopyToClipboard text={color.color4}>
            <Wrapper>
              <ColorCode>{color.color4}</ColorCode>
              <CopyMesg>
                Copied!<Square></Square>
              </CopyMesg>
            </Wrapper>
          </CopyToClipboard>
        </ListColor4>
      </LiCss>
      <LikeDiv>
        <ButtonCss
          onClick={() => likeUp(color._id, color.likes, idx)}
          style={{ color: color.liked ? " #d54062" : "#1d2737" }}
        >
          <AiFillHeart />
          <LikeText>{likes[idx]}</LikeText>
        </ButtonCss>
      </LikeDiv>
    </UlCss>
  ));

  return <ListDiv>{colorList}</ListDiv>;
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
  animation: ${boxFade} 2.2s forwards;
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
  box-shadow: 0px 1px 19px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
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

const ColorCode = styled.button`
  opacity: 0;
  margin: 0;
  font-size: 15px;
  font-weight: 400;
  color: white;
  box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.25);
  top: 31px;
  padding: 10px 170px 0px 1px;
  background: rgba(0, 0, 0, 0.15);
  border: none;
  width: -webkit-fill-available;
  outline: none;

  &:hover {
    animation: ${boxFade} 0.6s forwards;
  }
  &:active {
    transform: translateY(2px);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
  }
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

export default LandingTest;
