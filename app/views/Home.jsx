import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div>
        {'Home'}
        <Link to={'writing/foo'}>{'Writing'}</Link>
        <Link to={'speaking/foo'}>{'Speaking'}</Link>
      </div>)
  }
}

export default Home;
