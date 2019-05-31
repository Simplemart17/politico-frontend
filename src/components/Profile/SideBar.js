import React from 'react';

const SideBar = () => {
  let test;
  return (
    <div className='sidebar'>
      <div className='sidebar-menu'>
        <ul>
          <li className='active profile-nav'><a href='#'>Dashboard</a></li>
          <li className='modal-link profile-nav' onClick={test}>The Candidates</li>
          <li className='modal-link profile-nav' onClick={test}>Give Your Mandate</li>
          <li className='modal-link profile-nav' onClick={test}>Interest Form</li>
          <li className='modal-link profile-nav' onClick={test}>Election Result</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
