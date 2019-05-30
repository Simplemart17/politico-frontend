import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../Button/index';

const RegisterForm = props => {
  const [formInput, setFormInput] = useState({
    email: ''
  });
  return (
    <div className='form-wrapper'>
      <div className='center'>
        <h1>Register Here</h1>
      </div>
      <div>
        <form>
          <i className='fa fa-user icon' />
          <input
            className='form-field'
            type='text'
            name='firstname'
            placeholder='First Name' />

          <i className='fa fa-user icon' />
          <input
            className='form-field'
            type='text'
            name='lastname'
            placeholder='Last Name' />

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

          <i className='fa fa-lock icon' />
          <input
            className='form-field'
            type='password'
            name='confirmPassword'
            placeholder='Confirm Password' />

          <div className='reg-btn center'>
            <div className='inline'>
              <Button className='col-white bg-green button'>Submit</Button>
            </div>
            <div className='inline '>
              <Button className='col-white bg-grey button'>Reset</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
