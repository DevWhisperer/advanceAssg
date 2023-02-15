import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    max-width: 1200px;
  min-width: 800px;
  text-align: center;
  background-color:${({ isDarkMode }) => (isDarkMode ? "black" : "white")};
  color:${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
}
`;
export default GlobalStyle;
