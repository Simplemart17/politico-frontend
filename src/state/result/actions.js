import { GET_ELECTION_RESULT_SUCCESS, GET_ELECTION_RESULT_REQUEST, GET_ELECTION_RESULT_FAILURE } from './actionTypes';
import axios from '../../utils/axios';

export const getResultSuccess = (data, key) => ({
  type: GET_ELECTION_RESULT_SUCCESS,
  payload: data,
  key
});

export const getElectionResultRequest = () => ({
  type: GET_ELECTION_RESULT_REQUEST,
});

export const getResultFailure = error => ({
  type: GET_ELECTION_RESULT_FAILURE,
  payload: error
});

export const electionResultAction = () => async dispatch => {
  dispatch(getElectionResultRequest());
  try {
    const offices = await axios.get('/offices');
    offices.data.data.map(async office => {
      const resultDetails = await axios.get(`/office/${office.id}/result`);
      dispatch(getResultSuccess(resultDetails.data.data, office.name));
    });
  } catch (error) {
    dispatch(getResultFailure(error.response));
  }
};
