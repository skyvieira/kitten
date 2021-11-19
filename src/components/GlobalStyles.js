import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: url('http://www.cursor.cc/cursor/35/25/cursor.png'), auto !important;

    ::-webkit-scrollbar {
      width: 12px;
      background: #222326;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 10px #222;
      border-radius: 12px;
    }

    ::-webkit-scrollbar-thumb {
      background: #3c4049; 
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }
  }
`;

export default GlobalStyle