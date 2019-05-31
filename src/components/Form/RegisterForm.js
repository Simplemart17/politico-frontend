import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../Button/index';
import { registerAction } from '../../state/authentication/actions';

const RegisterForm = ({ createSignUp, history }) => {
  const [formInput, setFormInput] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const {
    firstname, lastname, email, password, confirmPassword
  } = formInput;

  const handleSubmit = async event => {
    event.preventDefault();
    createSignUp(formInput, history);
  };

  const handleChange = event => {
    event.persist();
    const { name, value } = event.target;
    setFormInput(() => ({ ...formInput, [name]: value }));
  };

  return (
    <div className='form-wrapper'>
      <div className='center'>
        <h1>Register Here</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <i className='fa fa-user icon' />
          <input
            className='form-field'
            type='text'
            name='firstname'
            value={firstname}
            onChange={handleChange}
            placeholder='First Name' />

          <i className='fa fa-user icon' />
          <input
            className='form-field'
            type='text'
            name='lastname'
            value={lastname}
            onChange={handleChange}
            placeholder='Last Name' />

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

          <i className='fa fa-lock icon' />
          <input
            className='form-field'
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
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

const mapStateToProps = state => ({
  registerState: state.auth.signup
});

export default connect(mapStateToProps, {
  createSignUp: registerAction
})(withRouter(RegisterForm));
