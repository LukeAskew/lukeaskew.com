import React from 'react';

const Footer = (props) => {
  return (
    <footer className={'mb2 divider-top'}>
      {props.items.map((item) => {
        return (<a
                  className={'grey inline-block'}
                  href={item.href}
                  key={item.title}>{item.title}</a>)
      })}
    </footer>
  );
};

Footer.propTypes = {
  items: React.PropTypes.array.isRequired,
};

export default Footer;
