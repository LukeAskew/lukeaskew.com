import React from 'react';
import { css } from '@emotion/core';
import Heading from './Heading';
import Container from './Container';
import { SPACE, MEDIA } from '../tokens';

const Banner = () => (
  <div
    css={css`
      width: 100%;
      position: relative;
      background-size: ${SPACE.sm};
      background-repeat: repeat;
      background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNhYWEiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iNi4zNzUgNi4zNzUgMTIgMTIiPjxwYXRoIGQ9Ik03LjA4MiAxOC4zNzVoLS43MDd2LS43MDdMMTcuNjY4IDYuMzc1aC43MDd2LjcwN0w3LjA4MiAxOC4zNzV6bTExLjI5MyAwdi0uNzA3bC0uNzA3LjcwN2guNzA3em0tMTEuMjkzLTEyaC0uNzA3di43MDdsLjcwNy0uNzA3eiIvPjwvc3ZnPg==');
    `}
  >
    <Container>
      <Heading level={1}>
        <div
          css={css`
            position: relative;
            top: -0.5em;

            @media ${MEDIA.md} {
              padding-left: 0.5em;
            }
          `}
        >
          Luke
        </div>{' '}
        <div
          css={css`
            position: relative;
            padding-left: 1rem;
            bottom: 0.5em;

            @media ${MEDIA.md} {
              padding-left: 33%;
            }
          `}
        >
          Askew
        </div>
      </Heading>
    </Container>
  </div>
);

export default Banner;
