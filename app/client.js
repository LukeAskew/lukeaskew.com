import React from 'react';
import { Router, browserHistory } from 'react-router';
import withScroll from 'scroll-behavior';
import AsyncProps from 'async-props';
import { render } from 'react-dom';
import routes from './routes';
import './styles/main.css';

// entry point for client-side
// use AsyncProps middleware
const app = React.createElement(Router, {
  routes,
  history: withScroll(browserHistory),
  render: (props) => { return React.createElement(AsyncProps, props); },
});

render(app, document.getElementById('app'));
