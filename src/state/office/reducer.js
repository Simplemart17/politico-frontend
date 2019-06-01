import { GET_OFFICE_LIST_SUCCESS, GET_OFFICE_LIST_FAILURE } from './actionTypes';
import { initialState } from './state';

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_OFFICE_LIST_SUCCESS:
      return {
        ...state,
        officeData: action.payload
      };
    case GET_OFFICE_LIST_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
