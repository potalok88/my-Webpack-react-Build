import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Temp from './components/Temp/Temp';
import Main from './components/Main/Main';


export default () => (
  <Router history={browserHistory}>
    <Route path='/' component={Main} />
    <Route path='/temp' component={Temp} />
  </Router>
);

