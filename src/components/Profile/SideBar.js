import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  let test;
  return (
    <div className='sidebar'>
      <div className='sidebar-menu'>
        <ul>
          <li className='active profile-nav'><Link to='profile'>Dashboard</Link></li>
          <li className='profile-nav'><Link to='expression-of-interest'>Interest Form</Link></li>
          <li className='modal-link profile-nav' onClick={test}>Candidates</li>
          <li className='modal-link profile-nav' onClick={test}>Vote</li>
          <li className='modal-link profile-nav' onClick={test}>Result</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
