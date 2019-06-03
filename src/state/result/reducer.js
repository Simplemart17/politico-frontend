import { initialState } from './state';
import { GET_ELECTION_RESULT_SUCCESS, GET_ELECTION_RESULT_REQUEST, GET_ELECTION_RESULT_FAILURE } from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ELECTION_RESULT_SUCCESS:
      return {
        ...state,
        results: {
          ...state.results,
          [action.key]: action.payload,
        },
        isLoading: false
      };
    case GET_ELECTION_RESULT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case GET_ELECTION_RESULT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
