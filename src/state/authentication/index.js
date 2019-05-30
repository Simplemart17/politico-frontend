import { initialState } from './state';
import reducer from './reducer';

export const auth = {
  initialState,
  reducer,
  stateKey: 'auth',
};
