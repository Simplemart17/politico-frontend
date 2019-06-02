import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <div className='error-page'>
    <h1>ERROR 404</h1>
    <p className='center'>The Page Requested is Not Found!</p>
    <p className='center'><Link className='error-page-link' to='/'>Go Back to Homepage</Link></p>
  </div>
);

export default ErrorPage;
