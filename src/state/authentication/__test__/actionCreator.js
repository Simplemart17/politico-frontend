import * as actions from '../actions';
import * as types from '../actionTypes';

describe('Auth Action Creators', () => {
  const user = {
    firstname: 'test test',
    lastname: 'testUser',
    email: 'test@andela.com',
    password: 'Secret@1234',
  };
  it('Should make request', () => {
    const expectedAction = {
      type: types.REGISTER_REQUEST,
    };
    expect(actions.request(user)).toEqual(expectedAction);
  });

  it('Should make success', () => {
    const expectedAction = {
      type: types.REGISTER_SUCCESS,
      user,
    };
    expect(actions.success(user)).toEqual(expectedAction);
  });
  it('Should make failure', () => {
    const error = 'token';
    const expectedAction = {
      type: types.REGISTER_FAILURE,
      error,
    };
    expect(actions.failure(error)).toEqual(expectedAction);
  });
});
