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
      <LiCss>
        <ListColor1 background={color.color1}>{color.color1}</ListColor1>
      </LiCss>
      <LiCss>
        <ListColor2 background={color.color2}>{color.color2}</ListColor2>
      </LiCss>
      <LiCss>
        <ListColor3 background={color.color3}>{color.color3}</ListColor3>
      </LiCss>
      <LiCss>
        <ListColor4 background={color.color4}>{color.color4}</ListColor4>
      </LiCss>
    </UlCss>
  ));

  return <ListDiv>{colorList}</ListDiv>;
};

const ListColor1 = styled.div`
  background: ${(props) => props.background || "black"};
    font-size: 23px;
    padding: 12px 0px;
}
}
`;
const ListColor2 = styled.div`
  background: ${(props) => props.background || "black"};
    font-size: 23px;
    padding: 12px 0px;
}
}
`;
const ListColor3 = styled.div`
  background: ${(props) => props.background || "black"};
    font-size: 23px;
    padding: 12px 0px;
}
}
`;
const ListColor4 = styled.div`
  background: ${(props) => props.background || "black"};
    font-size: 23px;
    padding: 12px 0px;
}
}
`;

const ListDiv = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 59vh;
  z-index: 2;
    right: -20vw;
        flex-wrap: wrap;
    display: flex;
    width: fit-content;
}
    
    
}


`;

const UlCss = styled.ul`
  background: ghostwhite;
  margin-right: 4vw;
  list-style: none;
  font-size: 15px;
  color: white;
  font-weight: 400;
  margin-right: 60px;
  height: 257px;
  width: 198px;
  box-shadow: 13px 17px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
`;

const LiCss = styled.li`
  transform: translateX(-18px);
  color: white;
  font-weight: bold;
  font-size: 31px;
`;

export default LandingTest;
