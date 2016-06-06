import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import marked from 'marked';

const PostHeading = (props) => {
  return (
    <div className={'banner mt4'}>
      <Helmet title={`${props.title} - Luke Askew`} />
      <div className={'max-width-3 mx-auto px2 center'}>
        <h1 className={'post-heading'}><div>{props.title}</div></h1>
      </div>
    </div>
  );
};

export default PostHeading;
