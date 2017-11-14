import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import ExchangeCurrency from './containers/ExchangeCurrency';
import Main from './containers/Main';


export default () => (
  <Router history={browserHistory}>
    <Route path='/' component={Main} />
    <Route path='/exchangecurrency' component={ExchangeCurrency} />
  </Router>
);

