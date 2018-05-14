import { FETCH_USER_REQUEST } from '../actions/user';
import { FETCH_USER_SUCCESS } from '../actions/user';
import { FETCH_USER_ERROR } from '../actions/user';

import { CREATE_USER_REQUEST } from '../actions/user';
import { CREATE_USER_SUCCESS } from '../actions/user';
import { CREATE_USER_ERROR } from '../actions/user';

const initialState = {
  isLoggedIn: false,
  request: false,
  error: null,
  user: null,
  registerRequest: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        request: true
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        request: false,
        isLoggedIn: true,
        user: action.payload
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        request: false,
        error: action.err
      };
    case CREATE_USER_REQUEST:
      return {
        ...state,
        registerRequest: true
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        registerRequest: false
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        registerRequest: false,
        error: action.payload
      };
    default:
      return state;
  }
};
