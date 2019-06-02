import { initialState } from './state';
import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, SIGN_IN_SUCCESS, SIGN_IN_REQUEST,
  SIGN_IN_FAILURE, SIGN_OUT
} from './actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
        registering: true,
        error: null,
        isLoading: true
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        registered: true,
        signin: action.payload,
        isLoading: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        registering: false,
        registered: false,
        error: action.payload,
        isLoading: false,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signin: action.payload,
        isLoading: false,
      };
    case SIGN_IN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        signin: action.payload,
        isLoading: false,
      };
    case SIGN_OUT:
      return {
        ...state,
        signin: {}
      };
    default:
      return state;
  }
};
