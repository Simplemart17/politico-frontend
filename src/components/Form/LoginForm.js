import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../Button/index';
import { signInAction } from '../../state/authentication/actions';
import Preloader from '../Loader/index';

const LoginForm = ({ loginUser, isLoading, history }) => {
  const [formInput, setFormInput] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formInput;

  const handleSubmit = event => {
    event.preventDefault();
    loginUser(formInput, history);
  };

  const handleChange = event => {
    event.persist();
    const { name, value } = event.target;
    setFormInput(() => ({ ...formInput, [name]: value }));
  };

  return (
    <>
      <div className='form-header'>
        <div className='form-grid'>
          <div className='form-head center col-white'> Enter Your Login Details</div>
        </div>
      </div>

      <div className='form-wrapper login-form'>
        <form onSubmit={handleSubmit} data-testid="login-form">
          <i className='fa fa-envelope icon' />
          <input
            className='form-field'
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            placeholder='Email Address'
            data-testid='email-input' />

          <i className='fa fa-lock icon' />
          <input
            className='form-field'
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            placeholder='Password'
            data-testid='password-input' />

          <div className='form-btn center' data-testid='submit-btn'>
            <Button className='center-box col-white bg-green button' type='submit'>Sign In</Button>
          </div>
        </form>
      </div>
      {isLoading && (<div className='auth-loading' data-testid='loading'><Preloader /></div>)}
    </>
  );
};

const mapStateToProps = ({ auth }) => ({
  loginState: auth.signin,
  isLoading: auth.isLoading
});

export default connect(mapStateToProps, { loginUser: signInAction })(withRouter(LoginForm));
