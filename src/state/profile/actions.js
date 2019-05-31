import axios from '../../utils/axios';
import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from './actionTypes';

export const getProfileSuccess = profile => ({
  type: GET_PROFILE_SUCCESS,
  payload: profile,
});

export const getProfileFailure = error => ({
  type: GET_PROFILE_FAILURE,
  payload: error,
});

export const getProfileAction = () => async dispatch => {
  try {
    const usersData = await axios.get('/auth/profile');
    const { user } = usersData.data.data[0];
    return dispatch(getProfileSuccess(user));
  } catch (error) {
    dispatch(getProfileFailure(error.response));
  }
};
