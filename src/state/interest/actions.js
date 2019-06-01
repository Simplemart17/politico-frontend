import swal from 'sweetalert';
import { CREATE_INTEREST_SUCCESS, CREATE_INTEREST_FAILURE } from './actionTypes';
import axios from '../../utils/axios';

export const createInterestSuccess = form => ({
  type: CREATE_INTEREST_SUCCESS,
  payload: form,
});

export const createInterestFailure = error => ({
  type: CREATE_INTEREST_FAILURE,
  payload: error,
});

export const interestExpressionAction = form => async dispatch => {
  try {
    const userInterest = await axios.post('/office/interest', form);
    dispatch(createInterestSuccess(userInterest.data));
    swal({
      title: 'Registered Successfully',
      text: userInterest.data.message,
      icon: 'success',
      button: 'Ok'
    });
  } catch (error) {
    dispatch(createInterestFailure(error.response));
    swal({
      title: 'Registration Unsuccessful',
      text: error.response.data.message,
      icon: 'error',
      button: 'Close'
    });
  }
};
