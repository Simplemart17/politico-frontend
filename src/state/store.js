/* eslint-disable no-undef */
import {
  createStore, applyMiddleware, compose, combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { auth } from './authentication';
import { profile } from './profile';
import { party } from './party';
import { office } from './office';
import { interest } from './interest';
import { candidate } from './candidates';
import { result } from './result';

const middleware = process.env.NODE_ENV !== 'production' ? [logger, thunk] : [thunk];
const rootReducer = combineReducers({
  [auth.stateKey]: auth.reducer,
  [profile.stateKey]: profile.reducer,
  [party.stateKey]: party.reducer,
  [office.stateKey]: office.reducer,
  [interest.stateKey]: interest.reducer,
  [candidate.stateKey]: candidate.reducer,
  [result.stateKey]: result.reducer
});

const reduxDevTools = process.env.NODE_ENV === 'production' ? p => p : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(...middleware),
    reduxDevTools,
  ),
);

export default store;
