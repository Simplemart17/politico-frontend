import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { electionResultAction } from '../../state/result/actions';
import Preloader from '../Loader/index';

const ElectionResult = props => {
  useEffect(() => {
    props.dispatch(electionResultAction());
  }, [props.dispatch]);
  const ResultTable = ({ office, data }) => <div className='table-area bg-white'>
      <div className='result-table'>
        <table>
          <caption><b>Election Results for {office} Government Office</b></caption>
          <thead>
            <tr>
              <th scope='col'>Candidate Name(s)</th>
              <th scope='col'>Office Name</th>
              <th scope='col'>Vote Count</th>
            </tr>
          </thead>
          <tbody>
            {
              data && data.map(candidate => <tr key={candidate.id}>
                <td data-label='Candidate Names:'>{candidate.firstname} {candidate.lastname}</td>
                <td data-label='Office Name:'>{candidate.officename}</td>
                <td data-label='Result:'>{candidate.result}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>;

  return (
    <Fragment>
      <div className='profile-header'>
        <div className='main-area center'>
          <div>
            <h2>See Election Results</h2>
          </div>
        </div>
      </div>
      {
        props.isLoading && <div className='loading'><Preloader /></div>
      }
      {
        props.electResults && Object.keys(props.electResults)
          .map(office => <ResultTable
          key={office}
          office={office}
          data={props.electResults[office]} />)
      }
    </Fragment>
  );
};

const mapState = ({ result }) => ({
  electResults: result.results,
  isLoading: result.isLoading
});

export default connect(mapState)(ElectionResult);
