import { initialState } from './state';
import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE
} from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, registering: true };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        registered: true,
        signup: action.user,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registering: false,
        registered: false,
        error: action.error
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signin: action.payload
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        signin: action.payload
      };
    default:
      return state;
  }
};
