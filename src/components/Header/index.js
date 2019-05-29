import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
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
            <div className='nav-links'>
            <Link to='login'>Sign In</Link>
            <Link to='register'>Register</Link>
            </div>
        </div>
      </div>
);

export default Header;
