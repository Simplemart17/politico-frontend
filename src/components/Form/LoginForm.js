import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/index';

const LoginForm = props => {
  const [formInput, setFormInput] = useState({
    email: ''
  });
  return (
    <div>
      <div className='form-header'>
        <div className='form-grid'>
          <input className='form-inactive center col-white' value='Enter Your Login Details' />
        </div>
      </div>

      <div className='form-wrapper login-form'>
        <form>
          <i className='fa fa-envelope icon' />
          <input
            className='form-field'
            type='email'
            name='email'
            placeholder='Email Address' />

          <i className='fa fa-lock icon' />
          <input
            className='form-field'
            type='password'
            name='password'
            placeholder='Password' />

          <div className='form-btn center'>
            <Button className='col-white bg-green button'>Sign In</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
