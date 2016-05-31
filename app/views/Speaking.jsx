import React from 'react';
import { getEntry } from '../lib/api';
import PostHeading from '../components/PostHeading';
import PostBody from '../components/PostBody';

class Speaking extends React.Component {

  static loadProps(params, cb) {
    getEntry('speaking', params.params.slug)
      .then((data) => {
        cb(null, { data });
      });
  }

  render() {

    const post = this.props.data.items[0].fields;

    return (
      <div>
        <PostHeading title={post.title} />
        <PostBody
          {...this.props}
          post={post} />
      </div>
    )

  }
}


export default Speaking;
