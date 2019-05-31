import { GET_PARTY_LIST_SUCCESS, GET_PARTY_LIST_FAILURE } from './actionTypes';
import { initialState } from './state';

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PARTY_LIST_SUCCESS:
      return {
        ...state,
        partyData: action.payload
      };
    case GET_PARTY_LIST_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
