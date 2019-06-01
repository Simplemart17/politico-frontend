import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutUser } from '../../state/authentication/actions';

export const Header = ({ signinState, signOut, history }) => (
  <div className='nav'>
    <div className='nav-center'>
      <div className='nav-header'>
        <div className='nav-title'>
          <Link to='/'>Politico</Link>
        </div>
      </div>
      <div className='nav-btn'>
        <label htmlFor='nav-check'>
          <span></span> <span></span> <span></span>
        </label>
      </div>
      <input type='checkbox' id='nav-check' />
      {signinState
        ? <div className='nav-links'>
          <Link to='profile'>Dashboard</Link>
          <Link to='expression-of-interest' className='hidden'>Interest Form</Link>
          <Link to='candidates' className='hidden'>Candidates</Link>
          <Link to='vote' className='hidden'>Vote</Link>
          <Link to='result' className='hidden'>Result</Link>
          <Link to='#' onClick={() => signOut(history)}>Sign Out</Link>
        </div>
        : <div className='nav-links'>
          <Link to='login'>Sign In</Link>
          <Link to='register' >Register</Link>
        </div>}
    </div>
  </div>
);

const mapStateToProps = ({ auth }) => ({ signinState: auth.signin.id });

export default connect(mapStateToProps, { signOut: signOutUser })(withRouter(Header));
