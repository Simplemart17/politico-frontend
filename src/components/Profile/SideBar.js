import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => (
  <div className='sidebar'>
    <div className='sidebar-menu'>
      <ul>
        <li className='active profile-nav'><Link to='profile'>Dashboard</Link></li>
        <li className='profile-nav'><Link to='expression-of-interest'>Interest Form</Link></li>
        <li className='profile-nav'><Link to='candidates'>Candidates</Link></li>
        <li className='profile-nav'><Link to='vote'>Vote</Link></li>
        <li className='profile-nav'><Link to='result'>Result</Link></li>
      </ul>
    </div>
  </div>
);

export default SideBar;
