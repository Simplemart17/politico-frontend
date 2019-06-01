import { initialState } from './state';
import { CREATE_INTEREST_SUCCESS, CREATE_INTEREST_FAILURE } from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_INTEREST_SUCCESS:
      return {
        ...state,
        interest: action.payload
      };
    case CREATE_INTEREST_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
