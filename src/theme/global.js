import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font-size: 18px;
  }
  
  h1, h2, h3, h3, h4, h5, h6, strong {
    font-family: 'Righteous', cursive;
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`