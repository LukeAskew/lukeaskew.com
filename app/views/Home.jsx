import React from 'react';
import { Link } from 'react-router';
import NavList from '../components/NavList';
import Footer from '../components/Footer';
import { getProfileLinks, getWritings, getSpeakings, getProjects } from '../lib/api';


class Home extends React.Component {

  /**
   * Async function called by `async-props` during routing
   * @param  {object}   params
   * @param  {Function} cb
   */
  static loadProps(params, cb) {

    // define necessary data endpoints
    const data = [
      getProfileLinks(),
      getWritings(),
      getSpeakings(),
      getProjects()
    ];

    // get all, the callback to async-props
    Promise.all(data)
      .then((data) => {
        cb(null, {
          profileLinks: data[0],
          writings: data[1],
          speakings: data[2],
          projects: data[3],
        })
      });

  }

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
                items={this.props.writings.items} />
            </div>
            <div className={'col col-12 sm-col-5 lg-col-4'}>
              <NavList
                heading={'Speaking'}
                slug={'speaking'}
                items={this.props.speakings.items} />
              <NavList
                heading={'Projects'}
                slug={'projects'}
                items={this.props.projects.items} />
            </div>
          </div>
        </div>
        <div className={'footer max-width-4 mx-auto mb3 px2'}>
          <Footer items={this.props.profileLinks.items} />
          <a href={'https://github.com/LukeAskew/lukeaskew.com'} className={'smaller'}>{'View Source'}</a>
        </div>
      </div>)
  }
}

Home.defaultProps = {
  writings: [],
  speakings: [],
  profileLinks: [],
};

export default Home;
