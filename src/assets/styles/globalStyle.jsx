import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    outline: 0;
    font-family: "Poppins",sans-serif;
    body{
      width: 100vw;
      height: 100vh;
      background-color: #3f3354;
    }
  }
`;

export default GlobalStyle;