import { GET_PARTY_LIST_SUCCESS, GET_PARTY_LIST_FAILURE, GET_PARTY_LIST_REQUEST } from './actionTypes';
import { initialState } from './state';

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PARTY_LIST_SUCCESS:
      return {
        ...state,
        partyData: action.payload,
        isLoading: false
      };
    case GET_PARTY_LIST_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_PARTY_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
