import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './Index';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Interest from './Interest';
import Candidate from './Candidate';
import Vote from './Vote';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Index} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/expression-of-interest' component={Interest} />
      <Route exact path='/candidates' component={Candidate} />
      <Route exact path='/vote' component={Vote} />
    </Switch>
  </Router>
);

export default App;
