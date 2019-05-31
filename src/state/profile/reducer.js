import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from './actionTypes';
import { initialState } from './state';

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        usersData: action.payload
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
