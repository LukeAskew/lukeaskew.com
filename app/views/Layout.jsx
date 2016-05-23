import React from 'react';

class Layout extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <title>{'Title'}</title>
          {(process.env.NODE_ENV === 'production') ? <link rel="stylesheet" href="/main.css" /> : ''}
        </head>
        <body>
          <div id="app">
            {this.props.children}
          </div>
          <script src="/main.js" async />
        </body>
      </html>
    )
  }
}

export default Layout;
