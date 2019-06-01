import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfileAction } from '../../state/profile/actions';

const Userdetails = ({ profile, profileState }) => {
  useEffect(() => {
    profile();
  }, []);
  return (
    <div>
      <div className='profile-header'>
        <div>
          <img src='https://res.cloudinary.com/drmrayjr0/image/upload/v1559304041/profile_mbyrmu.jpg' alt='profile-pic' />
          <div className='profile-info'>
            <h2>{profileState.firstname} {profileState.lastname}</h2>
            <h4>{profileState.email}</h4>
            <h4>{profileState.phonenumber}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ profile }) => ({ profileState: profile.usersData });

export default connect(mapStateToProps, { profile: getProfileAction })(Userdetails);
