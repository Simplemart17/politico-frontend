/* eslint-disable no-undef */
import {
  createStore, applyMiddleware, compose, combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { auth } from './authentication';
import { profile } from './profile';
import { party } from './party';

const middleware = process.env.NODE_ENV !== 'production' ? [logger, thunk] : [thunk];
const rootReducer = combineReducers({
  [auth.stateKey]: auth.reducer,
  [profile.stateKey]: profile.reducer,
  [party.stateKey]: party.reducer
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
