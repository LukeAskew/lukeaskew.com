import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import routes from './routes';
import './styles/main.css';

// entry point for client-side
const app = React.createElement(Router, { history: browserHistory }, routes);
render(app, document.getElementById('app'));
