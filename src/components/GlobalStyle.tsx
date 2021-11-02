import { css, Global } from '@emotion/react';
import { theme } from '../theme';

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    color: ${theme.textColor};
    font-family: ${theme.fontFamily};
    font-size: ${theme.fontSize};
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  label {
    display: block;
  }

  input,
  button {
    border: 1px solid ${theme.borderColor};
    border-radius: ${theme.borderRadius};
    display: block;
    padding: 8px 16px;
  }
`;

export const GlobalStyle = () => {
  return <Global styles={globalStyles} />;
};
