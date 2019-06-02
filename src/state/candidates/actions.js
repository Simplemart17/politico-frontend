import swal from 'sweetalert';
import {
  GET_CANDIDATES_LIST_SUCCESS,
  GET_CANDIDATES_LIST_FAILURE,
  GET_CANDIDATES_LIST_REQUEST,
  CREATE_CANDIDATE_VOTE_SUCCESS,
  CREATE_CANDIDATE_VOTE_FAILURE
} from './actionTypes';
import axios from '../../utils/axios';

export const getCandidateListSuccess = candidate => ({
  type: GET_CANDIDATES_LIST_SUCCESS,
  payload: candidate,
});

export const getCandidateRequest = () => ({
  type: GET_CANDIDATES_LIST_REQUEST,
});

export const getCandidateListFailure = error => ({
  type: GET_CANDIDATES_LIST_FAILURE,
  payload: error,
});

export const voteCandidateSuccess = voteForm => ({
  type: CREATE_CANDIDATE_VOTE_SUCCESS,
  payload: voteForm
});

export const voteCandidateFailure = error => ({
  type: CREATE_CANDIDATE_VOTE_FAILURE,
  payload: error
});

export const candidateListAction = () => async dispatch => {
  dispatch(getCandidateRequest());
  try {
    const candidatesList = await axios.get('/registered');
    dispatch(getCandidateListSuccess(candidatesList.data.data));
  } catch (error) {
    dispatch(getCandidateListFailure(error.response));
  }
};

export const voteCandidateAction = voteForm => async dispatch => {
  try {
    const voteCast = await axios.post('/votes', voteForm);
    dispatch(voteCandidateSuccess(voteCast.data));
    swal({
      title: 'Voted Successfully',
      text: voteCast.data.message,
      icon: 'success',
      button: 'Ok'
    });
  } catch (error) {
    dispatch(voteCandidateFailure(error.response));
    swal({
      title: 'Not Successful',
      text: error.response.data.message,
      icon: 'error',
      button: 'Close'
    });
  }
};
