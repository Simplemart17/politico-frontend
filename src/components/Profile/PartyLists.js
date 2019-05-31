import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPartyAction } from '../../state/party/actions';

const PartyLists = ({ party, partyState }) => {
  useEffect(() => {
    party();
  }, []);
  return (
    <div className='main-area bg-white'>
      <div>
        <h2>Political Parties</h2>
      </div>
      <div className='column'>
        {partyState.map(data => (
          <div className='box' key={data.id}>
            <div className='box-inner center'>
              <div className='logo-center'>
                <img src='https://res.cloudinary.com/drmrayjr0/image/upload/v1559327134/partylogo1_xgb8g8.png' className='box-logo' />
              </div>
              <div className='box-info'>
                <h4>{data.name}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='center' id='empty_list'>
      </div>
    </div>
  );
};

const mapStateToProps = ({ party }) => ({
  partyState: party.partyData
});

export default connect(mapStateToProps, {
  party: getPartyAction
})(PartyLists);
