import React from 'react';

const Icon = (props) => {
  return (
    <svg viewBox={'0 0 512 512'} className={'icon'} role="img">
      <path d={props.path} />
    </svg>
  );
};

export default Icon;
