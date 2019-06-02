import React, { Fragment } from 'react';

const ElectionResult = () => (
  <Fragment>
    <div className='profile-header'>
      <div className='main-area center'>
        <div>
          <h2>See Election Results</h2>
        </div>
      </div>
    </div>
    <div className='table-area bg-white'>
      <div className='federal'>
        <table>
          <caption><b>Election Results for Federal Government Office</b></caption>
          <thead>
            <tr>
              <th scope='col'>Candidate Name(s)</th>
              <th scope='col'>Office Name</th>
              <th scope='col'>Result</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </Fragment>
);

export default ElectionResult;
