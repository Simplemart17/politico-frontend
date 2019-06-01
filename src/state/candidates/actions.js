import { GET_CANDIDATES_LIST_SUCCESS, GET_CANDIDATES_LIST_FAILURE } from './actionTypes';
import axios from '../../utils/axios';

export const getCandidateListSuccess = candidate => ({
  type: GET_CANDIDATES_LIST_SUCCESS,
  payload: candidate,
});

export const getCandidateListFailure = error => ({
  type: GET_CANDIDATES_LIST_FAILURE,
  payload: error,
});

export const candidateListAction = () => async dispatch => {
  try {
    const candidatesList = await axios.get('/registered');
    dispatch(getCandidateListSuccess(candidatesList.data.data));
  } catch (error) {
    dispatch(getCandidateListFailure(error.response));
  }
};
