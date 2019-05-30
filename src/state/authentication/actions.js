import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE
} from './actionTypes';
import axios, { setAxiosHeader } from '../../utils/axios';
import { decodeToken, setLocalStorage } from '../../utils/auth';

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = user => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = error => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const signInSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: SIGN_IN_FAILURE,
  payload: error
});

export const registerAction = (newUser, redirect) => async dispatch => {
  try {
    dispatch(registerRequest());
    const registeredUser = await axios.post('/auth/signup', newUser);
    const { token } = registeredUser.data.data[0];
    const { user } = registeredUser.data.data[0];
    const decodedToken = decodeToken(token);
    dispatch(registerSuccess(user));
    if (decodedToken.isAdmin === false) {
      localStorage.setItem('token', token);
      redirect.push('/user-profile-page');
    } else {
      redirect.push('/admin-profile-page');
    }
    setLocalStorage('token', token);
    setAxiosHeader(token);
  } catch (error) {
    dispatch(registerFailure(error.response));
  }
};

export const signInAction = (login, redirect) => async dispatch => {
  try {
    const loginUser = await axios.post('/auth/login', login);
    const { token } = loginUser.data.data[0];
    const { user } = loginUser.data.data[0];
    const decodedToken = decodeToken(token);
    console.log(decodedToken.isAdmin);
    dispatch(signInSuccess(user));
    if (decodedToken.isAdmin === false) {
      localStorage.setItem('token', token);
      redirect.push('/user-profile-page');
    } else {
      redirect.push('/admin-profile-page');
    }
    setLocalStorage('token', token);
    setAxiosHeader(token);
  } catch (error) {
    dispatch(signInFailure(error.response));
  }
};
