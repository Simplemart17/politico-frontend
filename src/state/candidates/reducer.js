import { initialState } from './state';
import {
  GET_CANDIDATES_LIST_SUCCESS,
  GET_CANDIDATES_LIST_FAILURE,
  GET_CANDIDATES_LIST_REQUEST,
  CREATE_CANDIDATE_VOTE_SUCCESS,
  CREATE_CANDIDATE_VOTE_FAILURE
} from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIDATES_LIST_SUCCESS:
      return {
        ...state,
        candidates: action.payload,
        isLoading: false,
      };
    case GET_CANDIDATES_LIST_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_CANDIDATES_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case CREATE_CANDIDATE_VOTE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        voteCandidate: action.payload,
      };
    case CREATE_CANDIDATE_VOTE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
