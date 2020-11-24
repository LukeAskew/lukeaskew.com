import React from 'react';
import { css } from '@emotion/core';
import Container from './Container';
import Link from './Link';
import { SPACE } from '../tokens';

const LINK_STYLES = css`
  margin: ${SPACE.sm};
`;

const Footer: React.FC = () => (
  <Container
    css={css`
      margin-top: ${SPACE.md};
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    `}
  >
    <Link css={LINK_STYLES} to={'https://github.com/LukeAskew/lukeaskew.com'}>
      {'Site Source Code'}
    </Link>

    <Link css={LINK_STYLES} to={'https://github.com/lukeaskew'}>
      {'Github'}
    </Link>

    <Link css={LINK_STYLES} to={'https://www.linkedin.com/in/lukeaskew/'}>
      {'LinkedIn'}
    </Link>
  </Container>
);

export default Footer;
