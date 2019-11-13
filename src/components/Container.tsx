import React from 'react';
import { css } from '@emotion/core';
import { SPACE } from '../tokens';

const Container: React.FC = ({ children, ...restProps }) => (
  <div
    {...restProps}
    css={css`
      max-width: 60rem;
      margin-left: auto;
      margin-right: auto;
      padding-left: ${SPACE.md};
      padding-right: ${SPACE.md};
    `}
  >
    {children}
  </div>
);

export default Container;
