import App from './views/App';
import Home from './views/Home';
import Writing from './views/Writing';
import Speaking from './views/Speaking';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    {
      path: 'writing/:slug',
      component: Writing,
    },
    {
      path: 'speaking/:slug',
      component: Speaking,
    },
  ],
};

export default routes;
