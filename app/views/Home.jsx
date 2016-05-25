import React from 'react';
import { Link } from 'react-router';
import NavList from '../components/NavList';
import Footer from '../components/Footer';

class Home extends React.Component {

  // TODO add contentful API calls

  render() {
    return (
      <div>
        <div className={'banner mt4'}>
          <div className={'max-width-4 mx-auto relative'}>
            <h1 className={'site-heading'}>
              <div>{'Luke'}</div>
              <div>{'Askew'}</div>
            </h1>
            <div className={'tagline py1 pl2 pr4 sm-col-5 md-col-4 bg-white italic'}>
              {'I build websites'}
            </div>
          </div>
        </div>
        <div className={'navlist-container max-width-4 mx-auto mt3'}>
          <div className={'clearfix'}>
            <div className={'col col-12 sm-col-5 lg-col-4'}>
              <NavList
                heading={'Writing'}
                slug={'writing'}
                items={[{ slug: 'foo', title: 'Some Post' }]} />
            </div>
            <div className={'col col-12 sm-col-5 lg-col-4'}>
              <NavList
                heading={'Speaking'}
                slug={'speaking'}
                items={[{ slug: 'foo', title: 'Some Other Post' }]} />
            </div>
          </div>
        </div>
        <div className={'footer max-width-4 mx-auto mb3 px2'}>
          <Footer items={[{ href: '#', title: 'Github' }]} />
          <a href={'#'} className={'small grey'}>{'View Source'}</a>
        </div>
      </div>)
  }
}

export default Home;
