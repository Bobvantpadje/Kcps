import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import About from './components/About';
import Home from './components/Home';

import {Router, Route, IndexRoute, Link, hashHistory  } from 'react-router'

  ReactDOM.render(
    //<App companyName="KCPSoftware"/>,
    <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="About" component={About} />
    </Route>
  </Router>,
    document.getElementById('root')
  );
