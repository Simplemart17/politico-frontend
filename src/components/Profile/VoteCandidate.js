import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { candidateListAction, voteCandidateAction } from '../../state/candidates/actions';
import Button from '../Button/index';

const VoteCandidate = ({ getCandidates, listCandidates, voteCandidate }) => {
  useEffect(() => { getCandidates(); }, []);

  return (
    <div className='profile-header'>
      <div className='main-area center'>
        <div>
          <h2>Vote Your Candidate</h2>
        </div>
      </div>
      <div>
        <div className='vote-area table-area bg-white'>
          <table id='vote_lists'>
            <caption>
              <span className='col-red'>*</span>
              Click vote button to vote for your preferred candidate.  <u><b>
                NOTE:</b></u> You are allowed to vote once!
            </caption>
            <thead>
              <tr>
                <th scope='col'>Candidate</th>
                <th scope='col'>Office Type</th>
                <th scope='col'>Office Name</th>
                <th scope='col'>Political Party</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            {listCandidates.map(data => (
              <tbody key={data.id}>
                <tr>
                  <td data-label='Candidate:'>{data.firstname} {data.lastname}</td>
                  <td data-label='Office Type:'>{data.officetype}</td>
                  <td data-label='Office Name:'>{data.officename}</td>
                  <td data-label='Political Party:'>{data.partyname}</td>
                  <td data-label='Action:'><Button className='vote-btn bg-white' onClick={() => voteCandidate({
                    party: data.partyid,
                    office: data.officeid,
                    candidate: data.userid,
                  })}>{data.status === 'vote' ? 'VOTE' : 'VOTED' }</Button></td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ candidate }) => ({ listCandidates: candidate.candidates });
export default connect(mapStateToProps, {
  getCandidates: candidateListAction,
  voteCandidate: voteCandidateAction
})(VoteCandidate);
