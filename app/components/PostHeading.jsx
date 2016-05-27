import React from 'react';
import { Link } from 'react-router';
import marked from 'marked';

const PostHeading = (props) => {
  return (
    <div className={'banner mt4'}>
      <Link to={'/'} className={'back-link'}>{'\u2190'}</Link>
      <div className={'max-width-3 mx-auto px2 center'}>
        <h1 className={'post-heading'}><div>{props.title}</div></h1>
      </div>
    </div>
  );
};

export default PostHeading;
