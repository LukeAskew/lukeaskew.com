import React from 'react';
import { Link } from 'react-router';

const NavList = (props) => {
  return (
    <div className={'bg-white mb2 p2'}>
      <div className={'grey'}>{props.heading}</div>
      {props.items.map((item) => {
        return (<Link
                  className={'italic'}
                  to={`${props.slug}/${item.slug}`}
                  key={item.slug}>{item.title}</Link>)
      })}
    </div>
  );
};

NavList.propTypes = {
  heading: React.PropTypes.string.isRequired,
  slug: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
};

export default NavList;
