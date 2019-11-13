import React from 'react';
import { css } from '@emotion/core';
import { LinkProps } from '../typings/props';
import { COLOR } from '../tokens';

const Link: React.FC<LinkProps> = ({ to, children, ...restProps }) => (
  <a
    {...restProps}
    href={to}
    css={css`
      color: inherit;
      box-shadow: inset 0 -0.4rem 0 0 ${COLOR.gray[100]};
      font-style: italic;
      text-decoration: none;

      :hover {
        box-shadow: inset 0 -1.2rem 0 0 ${COLOR.blue};
        color: ${COLOR.white};
      }
    `}
  >
    {children}
  </a>
);

export default Link;
