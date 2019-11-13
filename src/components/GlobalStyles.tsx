import React from 'react';
import { Global, css } from '@emotion/core';
import COLOR from '../tokens/color';

const GlobalStyles: React.FC = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Libre Baskerville';
        src: url('/fonts/LibreBaskerville-Regular.woff2') format('woff'),
          url('/fonts/LibreBaskerville-Regular.woff') format('woff'),
          url('/fonts/LibreBaskerville-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: 'Libre Baskerville';
        src: url('/fonts/LibreBaskerville-Italic.woff2') format('woff'),
          url('/fonts/LibreBaskerville-Italic.woff') format('woff'),
          url('/fonts/LibreBaskerville-Italic.ttf') format('truetype');
        font-weight: normal;
        font-style: italic;
      }

      @font-face {
        font-family: 'Libre Baskerville';
        src: url('/fonts/LibreBaskerville-Bold.woff2') format('woff'),
          url('/fonts/LibreBaskerville-Bold.woff') format('woff'),
          url('/fonts/LibreBaskerville-Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
      }

      @font-face {
        font-family: 'Qanelas';
        src: url('/fonts/QanelasSoft-ExtraBold.woff2') format('woff2'),
          url('/fonts/QanelasSoft-ExtraBold.woff') format('woff'),
          url('/fonts/QanelasSoft-ExtraBold.ttf') format('truetype');
        font-weight: 800;
        font-style: normal;
      }

      *,
      *:before,
      *:after {
        box-sizing: border-box;
        margin: 0;
      }

      html {
        font-family: Libre Baskerville, serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
      }

      body {
        color: ${COLOR.black};
      }
    `}
  />
);

export default GlobalStyles;
