import React from 'react';
import { css } from '@emotion/core';
import GlobalStyles from './components/GlobalStyles';
import Banner from './components/Banner';
import Footer from './components/Footer';

const App: React.FC = () => (
  <>
    <GlobalStyles />

    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
      `}
    >
      <Banner />
      <Footer />
    </div>
  </>
);

export default App;
