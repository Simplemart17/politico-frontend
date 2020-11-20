import reducer from '../reducer';
import {
  registerSuccess, registerRequest, registerFailure, signInFailure
} from '../actions';

describe('Auth Reducer', () => {
  const user = {
    firstname: 'test test',
    lastname: 'testUser',
    email: 'test@andela.com',
    password: 'Secret@1234',
  };

  const error = { error: 'something happened' };
  it('Should return the Initial State', () => {
    expect(reducer(undefined, {
      registering: false, signin: {}, isLoading: false, error: ''
    })).toEqual({
      registering: false, signin: {}, isLoading: false, error: ''
    });
  });
  it('Should make request', () => {
    expect(reducer({}, registerRequest())).toEqual({
      registering: true,
      error: null,
      isLoading: true
    });
  });
  it('Should make success', () => {
    expect(reducer({}, registerSuccess(user))).toEqual({
      isLoading: false,
      registering: false,
      registered: true,
      signin: user,
    });
  });
  it('Should make failure', () => {
    expect(reducer({}, registerFailure(error))).toEqual({
      isLoading: false,
      registering: false,
      registered: false,
      error,
    });
  });
  it('should make sign in failure', () => {
    expect(reducer({}, signInFailure({}))).toEqual({
      signin: {}, isLoading: false
    });
  });
});
