import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { cleanup } from 'react-testing-library';

import { registerAction, registerSuccess, registerFailure } from '../actions';
import axios from '../../../utils/axios';
import { decodeToken } from '../../../utils/auth';

afterEach(cleanup);
const mockStore = configureMockStore([thunk]);
const store = mockStore({});
const mockData = {
  data: [{
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjUsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE1NTkzMzg0NzYsImV4cCI6MTU1OTQyNDg3Nn0.6JN7zoNw5Y_AKTGn0rpiStXrhcN5q375xqaz0-I6bbo',
  }],
};
const newUser = {
  firstname: 'test test',
  lastname: 'testUser',
  email: 'test@andela.com',
  password: 'Secret@1234',
};
const user = decodeToken(mockData.data[0].token);

describe('Auth Action', () => {
  it('Create User when signup action is successful', async () => {
    axios.post = jest.fn().mockReturnValue(Promise.resolve({ data: mockData }));

    await store.dispatch(registerAction(newUser));
    expect(store.getActions()[1].type).toEqual(registerSuccess(user).type);
  });
  it('do not Create User when signup action is not successful', async () => {
    const error = { status: 'fail', message: 'request failed' };
    axios.post = jest.fn().mockReturnValue(Promise.reject(error));

    await store.dispatch(registerFailure(error));
    expect(store.getActions()[2].type).toEqual(registerFailure(error).type);
  });
});
