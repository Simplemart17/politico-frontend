import { GET_ELECTION_RESULT_SUCCESS, GET_ELECTION_RESULT_FAILURE } from './actionTypes';
import axios from '../../utils/axios';

export const getResultSuccess = data => ({
  type: GET_ELECTION_RESULT_SUCCESS,
  payload: data
});

export const getResultFailure = error => ({
  type: GET_ELECTION_RESULT_FAILURE,
  payload: error
});

export const electionResultAction = id => async dispath => {
  try {
    const resultDetails = await axios.get(`/office/${id}/result`);
    console.log(resultDetails);
  } catch (error) {
    console.log(error);
  }
};
