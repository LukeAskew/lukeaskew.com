import React from 'react';

const Footer = (props) => {
  return (
    <footer className={'mb2 divider-top'}>
      {props.items.map((item) => {
        return (<a
                  className={'small mr2'}
                  href={item.fields.url}
                  key={item.fields.title}>{item.fields.title}</a>)
      })}
    </footer>
  );
};

Footer.propTypes = {
  items: React.PropTypes.array.isRequired,
};

Footer.defaultProps = {
  items: [],
};

export default Footer;
