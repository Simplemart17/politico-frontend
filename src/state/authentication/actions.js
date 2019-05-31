import {
  REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE, SIGN_OUT
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

export const signOut = () => ({
  type: SIGN_OUT
});

export const registerAction = (newUser, redirect) => async dispatch => {
  try {
    dispatch(registerRequest());
    const registeredUser = await axios.post('/auth/signup', newUser);
    const { token, user } = registeredUser.data.data[0];
    const decodedToken = decodeToken(token);
    dispatch(registerSuccess(user));
    if (decodedToken.isAdmin === false) {
      localStorage.setItem('token', token);
      redirect.push('/profile');
    } else {
      redirect.push('/admin-page');
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
    const { token, user } = loginUser.data.data[0];
    const decodedToken = decodeToken(token);
    setLocalStorage('token', token);
    setAxiosHeader(token);
    if (decodedToken.isAdmin === false) {
      console.log(decodedToken.isAdmin);
      dispatch(signInSuccess(user));
      return redirect.push('/profile');
    }
    dispatch(signInSuccess(user));
    return redirect.push('/admin-page');
  } catch (error) {
    return dispatch(signInFailure(error.response));
  }
};

export const signOutUser = redirect => dispatch => {
  try {
    localStorage.removeItem('token');
    dispatch(signOut());
    redirect.push('/');
  } catch (error) {
    redirect.push('/');
  }
};
