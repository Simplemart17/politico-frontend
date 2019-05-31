import React, { Fragment } from 'react';
import Header from '../components/Header/index';
import UserDetails from '../components/Profile/UserDetails';
import Sidebar from '../components/Profile/SideBar';
import PartyLists from '../components/Profile/PartyLists';
import Footer from '../components/Footer/index';

const Profile = () => (
  <Fragment>
    <Header />
    <UserDetails />
    <div className='profile-content'>
      <Sidebar />
      <PartyLists />
    </div>
    <Footer/>
  </Fragment>
);

export default Profile;
