import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *:active {
    outline: none;
    box-shadow: 0 0 2px 1px cornflowerblue !important;
  }
  img {
    user-select: none;
    pointer-events: none;
  }
  body {
    font-family: Roboto, Helvetica, Verdana, Arial, sans-serif;
  }
  ::selection {
    background-color: #9b583b;
    color: white;
  }
`;
