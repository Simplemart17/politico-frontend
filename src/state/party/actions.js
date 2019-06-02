import axios from '../../utils/axios';
import { GET_PARTY_LIST_SUCCESS, GET_PARTY_LIST_FAILURE, GET_PARTY_LIST_REQUEST } from './actionTypes';

export const getPartySuccess = partylists => ({
  type: GET_PARTY_LIST_SUCCESS,
  payload: partylists,
});

export const getPartyRequest = () => ({
  type: GET_PARTY_LIST_REQUEST,
});

export const getPartyFailure = error => ({
  type: GET_PARTY_LIST_FAILURE,
  payload: error,
});

export const getPartyAction = () => async dispatch => {
  dispatch(getPartyRequest());
  try {
    const partyLists = await axios.get('/parties');
    const partyDetails = partyLists.data.data;
    return dispatch(getPartySuccess(partyDetails));
  } catch (error) {
    dispatch(getPartyFailure(error.response));
  }
};
