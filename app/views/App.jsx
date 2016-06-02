import React from 'react';
import Helmet from 'react-helmet';

class App extends React.Component {

  render() {
    return (
      <div>
        <Helmet
          title={'Luke Askew'}
          meta={[
            { name: 'description', content: 'A developer\'s thoughts about front-end architecture, website design, and workflow.' }
          ]} />
        {this.props.children}
      </div>
    )
  }

}

export default App;
