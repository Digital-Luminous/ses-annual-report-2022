import { createGlobalStyle } from "styled-components";

import { colors } from "./colors";
import { breakpoints } from "./spacing";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'GothamBold';
    src: url(${require("./fonts/Gotham-Bold.otf")}) format('truetype');
  }

  @font-face {
    font-family: 'GothamMedium';
    src: url(${require("./fonts/Gotham-Medium.otf")}) format('truetype');
  }

  @font-face {
    font-family: 'GothamBook';
    src: url(${require("./fonts/Gotham-Book.otf")}) format('truetype');
  }

  html,
  body,
  #root {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    min-height: 100%;
    position: relative;
  }

    html {
      font-family: "GothamBook", Arial, sans-serif;
      font-style: normal;
      scroll-behavior: smooth;
    }

  body {
    width: 100%;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;

    font-family: "GothamBook", Arial, sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 1.4;

    * {
      box-sizing: border-box;

      &::selection {
        color: ${colors.white};
        background: ${colors.teal};
      }
    }
  }

  p {
    font-size: 16px;
    line-height: 1.4;
    margin: 0;
  }

  a {
    text-decoration: none;

    &:hover {
      cursor: pointer;
      text-decoration: none;
    }
  }

  button {
    font-family: "GothamBold", Arial, sans-serif;
  }

  h1, h2, h3, h4, h5 {
    font-family: "GothamBold", Arial, sans-serif;
    font-weight: normal;
  }

  h1 {
    font-size: 100px;
    line-height: 1.1;
    margin: 0;

    @media (min-width: ${breakpoints.tablet}px) {
      font-size: 62px;
      letter-spacing: -1px;
    }

    @media (min-width: ${breakpoints.desktop}px) {
      font-size: 45px;
      letter-spacing: -1.5px;
    }
  }

  h2 {
    font-size: 45px;
    line-height: 1.1;
    margin: 0;

    @media (min-width: ${breakpoints.tablet}px) {
      font-size: 50px;
    }

    @media (min-width: ${breakpoints.desktop}px) {
      font-size: 56px;
      letter-spacing: -1px;
    }
  }

  h3 {
    font-size: 1.5rem;
    line-height: 1.2;
    margin: 0;

    @media (min-width: ${breakpoints.tablet}px) {
      font-size: 2rem;
    }

    @media (min-width: ${breakpoints.desktop}px) {
      font-size: 2.5rem;
    }
  }

  h4 {
    font-size: 18px;
    line-height: 1.3;
    margin: 0;

    @media (min-width: ${breakpoints.tablet}px) {
      font-size: 20px;
    }

    @media (min-width: ${breakpoints.desktop}px) {
      font-size: 24px;
    }
  }

  h5 {
    font-size: 1.2rem;
    line-height: 1.2;
    margin: 0;

    @media (min-width: ${breakpoints.mobile}px) {
      font-size: 1.375rem;
    }

    @media (min-width: ${breakpoints.tablet}px) {
      font-size:  1.5rem;
    }

    @media (min-width: ${breakpoints.desktop}px) {
      font-size: 1.75rem;
    }
  }

  h6 {
    font-size: 17px;
    line-height: 1.1;
    font-family: "GothamMedium", Arial, sans-serif;
    font-weight: normal;
    margin: 0;

    @media (min-width: ${breakpoints.tablet}px) {
      font-size: 21px;
    }

    @media (min-width: ${breakpoints.desktop}px) {
      font-size: 22px;
    }
  }

  strong {
    font-family: "GothamBold", Arial, sans-serif;
  }

  ul {
    padding-left: 0;
  }

  li {
    list-style: none;
    font-size: 18px;
    line-height: 1.2;
    margin: 0;
  }
`;
