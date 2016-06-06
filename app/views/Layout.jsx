import React from 'react';

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.GA = `
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-22360854-1', 'auto');
      ga('send', 'pageview');
    `;
  }

  render() {
    return (
      <html lang={'en'}>
        <head>
          <meta charSet={'utf-8'} />
          <meta httpEquiv={'x-ua-compatible'} content={'ie=edge'} />
          <meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
          {this.props.head.title.toComponent()}
          <link rel={'shortcut icon'} type={'image/x-icon'} href={'/favicon.ico'} />
          {(process.env.NODE_ENV === 'production') ? <link rel={'stylesheet'} href={'/main.css'} /> : <link />}
          <script dangerouslySetInnerHTML={{__html: this.GA }}></script>
        </head>
        <body>
          <div id={'app'} dangerouslySetInnerHTML={{__html: this.props.body }}></div>
          <script src={'/main.js'} async />
        </body>
      </html>
    )
  }
}

export default Layout;
