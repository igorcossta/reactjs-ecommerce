import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 10px 8px;

    @media only screen and (min-width: 600px) {
      padding: 20px 80px;
    }
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;
