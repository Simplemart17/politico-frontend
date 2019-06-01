import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import Sidebar from './SideBar';
import { candidateListAction } from '../../state/candidates/actions';

const CandidatesList = ({ getCandidates, candidateState }) => {
  useEffect(() => { getCandidates(); }, []);
  return (
    <Fragment>
      <div className='profile-header'>
        <div className='main-area center'>
          <div>
            <h2>Candidates For Government Offices</h2>
          </div>
        </div>
      </div>
      <div className='profile-content'>
        <Sidebar />
        <div className='table-area bg-white'>
          <table>
            <thead>
              <tr>
                <th scope='col'>Candidate Name</th>
                <th scope='col'>Office Type</th>
                <th scope='col'>Office Name</th>
                <th scope='col'>Political Party</th>
              </tr>
            </thead>
            {candidateState.map(data => (
              <tbody key={data.id}>
                <tr>
                  <td data-label='Candidate:'>{data.firstname} {data.lastname}</td>
                  <td data-label='Office Type:'>{data.officetype}</td>
                  <td data-label='Office Name:'>{data.officename}</td>
                  <td data-label='Political Party:'>{data.partyname}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ candidate }) => ({
  candidateState: candidate.candidates
});

export default connect(mapStateToProps, { getCandidates: candidateListAction })(CandidatesList);
