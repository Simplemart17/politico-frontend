import axios from '../../utils/axios';
import { GET_OFFICE_LIST_SUCCESS, GET_OFFICE_LIST_FAILURE } from './actionTypes';

export const getOfficeSuccess = officelists => ({
  type: GET_OFFICE_LIST_SUCCESS,
  payload: officelists,
});

export const getOfficeFailure = error => ({
  type: GET_OFFICE_LIST_FAILURE,
  payload: error,
});

export const getOfficeAction = () => async dispatch => {
  try {
    const officeLists = await axios.get('/offices');
    const officeDetails = officeLists.data.data;
    return dispatch(getOfficeSuccess(officeDetails));
  } catch (error) {
    dispatch(getOfficeFailure(error.response));
  }
};
