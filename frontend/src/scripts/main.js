import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import FrontPage from './pages/FrontPage';
import OtherPage from './pages/OtherPage';
import AnotherPage from './pages/AnotherPage';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={FrontPage} />
      <Route path="other-page" component={OtherPage} />
      <Route path="another-page" component={AnotherPage} />
    </Route>
  </Router>
);

const el = document.getElementsByClassName('root-container')[0];
ReactDOM.render(router, el);
