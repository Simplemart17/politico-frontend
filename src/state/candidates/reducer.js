import { initialState } from './state';
import {
  GET_CANDIDATES_LIST_SUCCESS,
  GET_CANDIDATES_LIST_FAILURE,
  CREATE_CANDIDATE_VOTE_SUCCESS,
  CREATE_CANDIDATE_VOTE_FAILURE
} from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIDATES_LIST_SUCCESS:
      return {
        ...state,
        candidates: action.payload
      };
    case GET_CANDIDATES_LIST_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case CREATE_CANDIDATE_VOTE_SUCCESS:
      return {
        ...state,
        voteCandidate: action.payload,
      };
    case CREATE_CANDIDATE_VOTE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
