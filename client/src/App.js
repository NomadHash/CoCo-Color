import React from "react";
import "./App.css";
import Header from "./components/Header";
import Explanation from "./components/Explanation";
import LandingTest from "./components/LandingTest";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body {
    background: #393939;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Explanation />
        <LandingTest />
        <Header />
      </div>
    </>
  );
}

export default App;
