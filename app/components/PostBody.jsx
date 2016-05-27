import React from 'react';
import { Link } from 'react-router';
import marked from 'marked';
import moment from 'moment';

const PostHeading = (props) => {
  return (
    <div className={'post max-width-4 mx-auto mt3 px2'}>
      <div className={'clearfix'}>
        <div className={'col lg-col-4 pr3 mb2'}>
          <time className={'date grey'}>{moment(props.post.publishedDate).format('DD MMMM YYYY')}</time>
        </div>
        <div className={'col lg-col-8'}>
          <div dangerouslySetInnerHTML={{ __html: marked(props.post.body) }} />
          <div className={'mb3 divider-top'}>
            <Link to={'/'} className={'back-link'}>{'\u2190 Home'}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostHeading;
