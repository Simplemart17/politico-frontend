import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './Index';
import Register from './Register';
import Login from './Login';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Index} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
    </Switch>
  </Router>
);

export default App;
