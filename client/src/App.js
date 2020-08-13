import React from "react";
import "./App.css";
import Header from "./components/Header";
import Explanation from "./components/Explanation";

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
        <Header />
      </div>
    </>
  );
}

export default App;
