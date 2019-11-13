import React from 'react';
import { css } from '@emotion/core';
import { HeadingProps } from '../typings/props';
import { MEDIA } from '../tokens';

const Heading: React.FC<HeadingProps> = ({ children, level, ...restProps }) => {
  switch (level) {
    case 1:
      return (
        <h1
          css={css`
            font-family: Qanelas, sans-serif;
            font-weight: 800;
            line-height: 1.2;
            margin-top: 0;
            margin-bottom: 0;
            font-size: 4.5rem;

            @media ${MEDIA.sm} {
              font-size: 5.5rem;
            }

            @media ${MEDIA.md} {
              font-size: 6rem;
            }

            @media ${MEDIA.lg} {
              font-size: 7.5rem;
            }
          `}
          {...restProps}
        >
          {children}
        </h1>
      );
    default:
      return (
        <h2
          css={css`
            font-weight: 800;
            line-height: 1.2;
            font-size: 1.5rem;

            @media ${MEDIA.sm} {
              font-size: 1.75rem;
            }

            @media ${MEDIA.md} {
              font-size: 2rem;
            }

            @media ${MEDIA.lg} {
              font-size: 2.25rem;
            }
          `}
          {...restProps}
        >
          {children}
        </h2>
      );
  }
};

export default Heading;
