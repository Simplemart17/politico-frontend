import { initialState } from './state';
import { GET_ELECTION_RESULT_SUCCESS, GET_ELECTION_RESULT_FAILURE } from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ELECTION_RESULT_SUCCESS:
      return {
        ...state,
        results: action.payload
      };
    case GET_ELECTION_RESULT_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
