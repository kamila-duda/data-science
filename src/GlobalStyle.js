import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
} 
body{
  background: rgb(55,67,121);
  background-size: 15%;
  font-family: 'Raleway', sans-serif;
  margin: 0;
}
`;
