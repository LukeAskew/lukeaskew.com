import React from 'react';
import { Link } from 'react-router';

const NavList = (props) => {
  return (
    <div className={'bg-white mb2 p2'}>
      <div className={'grey mb1'}>{props.heading}</div>
      {props.items.map((item) => {
        return (
          <div
            key={item.fields.slug}
            className={'mb2'}>
            {(item.fields.url) ? (
              <a href={item.fields.url}>{item.fields.title}</a>
            ) : (
              <Link
                className={'italic'}
                to={`/${props.slug}/${item.fields.slug}`}>{item.fields.title}</Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

NavList.propTypes = {
  heading: React.PropTypes.string.isRequired,
  slug: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
};

NavList.defaultProps = {
  items: [],
};

export default NavList;
