const { createGlobalStyle } = require("styled-components");

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0; 
  width: 100%;
  height:100vh;
  background: linear-gradient(55deg, rgba(12,6,107,1) 0%, rgba(0,212,255,1) 100%);
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}`;
