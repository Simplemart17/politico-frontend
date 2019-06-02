import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../Button/index';
import { signInAction } from '../../state/authentication/actions';

const LoginForm = ({ loginUser, history }) => {
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
    <div>
      <div className='form-header'>
        <div className='form-grid'>
          <div className='form-head center col-white'> Enter Your Login Details</div>
        </div>
      </div>

      <div className='form-wrapper login-form'>
        <form onSubmit={handleSubmit}>
          <i className='fa fa-envelope icon' />
          <input
            className='form-field'
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            placeholder='Email Address' />

          <i className='fa fa-lock icon' />
          <input
            className='form-field'
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            placeholder='Password' />

          <div className='form-btn center '>
            <Button className='center-box col-white bg-green button '>Sign In</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ loginState: auth.signin });

export default connect(mapStateToProps, { loginUser: signInAction })(withRouter(LoginForm));
