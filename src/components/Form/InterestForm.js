import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '../Button/index';
import { getOfficeAction } from '../../state/office/actions';
import { getPartyAction } from '../../state/party/actions';
import { interestExpressionAction } from '../../state/interest/actions';

const InterestForm = ({
  offices, officeState, partyLists, partyState, createInterest
}) => {
  useEffect(() => { offices(); partyLists(); }, []);
  const [formInput, setFormInput] = useState({
    party: '',
    office: '',
  });


  // const { party, office } = formInput;

  const handleSubmit = async event => {
    event.preventDefault();
    createInterest(formInput);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='modal-content'>
        <div className='modal-container'>
          <h1>Expression of Interest Form</h1>
          <hr />

          <label>
            <b>Political Party<span className='col-red'>*</span></b>
          </label>
          <select name='party' onChange={handleChange}>
            <option value='0'>Select Your Political Party</option>
            {partyState.map(data => (
              <option key={data.id} value={data.id}>{data.name}</option>
            ))}
          </select>

          <label>
            <b>Office Details<span className='col-red'>*</span></b>
          </label>
          <select name='office' onChange={handleChange}>
            <option value='0'>Select Office Type & Name</option>
            {officeState.map(data => (
              <option key={data.id} value={data.id}>{data.type}/{data.name}</option>
            ))}
          </select>

          <div className='submit-btn'>
            <div>
              <Button className='col-white bg-green button'>Submit</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ office, party, interest }) => ({
  officeState: office.officeData,
  partyState: party.partyData,
  interestState: interest.interest
});

export default connect(mapStateToProps, {
  offices: getOfficeAction,
  partyLists: getPartyAction,
  createInterest: interestExpressionAction
})(withRouter(InterestForm));
