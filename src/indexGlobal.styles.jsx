import styled, { createGlobalStyle } from "styled-components";
import backgroundImg from "../src/Images/Mask.png";
export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  background-image: url(${backgroundImg});
  background-size: fixed;
}
div {
  margin-left: 90px;
  padding: 0;
 }

@media (max-width: 768px) {
  div {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
  }
  body {
    background: none;
    height: 100%;
  }
}

`;
export const Container = styled.div``;