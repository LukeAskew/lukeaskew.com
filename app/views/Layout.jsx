import React from 'react';

class Layout extends React.Component {
  render() {
    return (
      <html lang={'en'}>
        <head>
          <meta charSet={'utf-8'} />
          <meta httpEquiv={'x-ua-compatible'} content={'ie=edge'} />
          <meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
          <title>{'Title'}</title>
          {(process.env.NODE_ENV === 'production') ? <link rel={'stylesheet'} href={'/main.css'} /> : <link />}
        </head>
        <body>
          <div id={'app'}>
            {this.props.children}
          </div>
          <script src={'/main.js'} async />
        </body>
      </html>
    )
  }
}

export default Layout;
