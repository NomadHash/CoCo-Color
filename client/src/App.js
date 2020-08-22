import React from "react";
import "./App.css";
import Header from "./components/Header";
import Explanation from "./components/Explanation";
import PalettesArea from "./components/PalettesArea";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body {
    background: #FDFDFD;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Explanation />
        <PalettesArea />
        <Header />
      </div>
    </>
  );
}

export default App;
