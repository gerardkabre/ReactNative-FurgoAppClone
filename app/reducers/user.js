import { FETCH_USER_REQUEST } from '../actions/user';
import { FETCH_USER_SUCCESS } from '../actions/user';
import { FETCH_USER_ERROR } from '../actions/user';

const initialState = {
  isLoggedIn: false,
  request: false,
  error: null,
  user: null
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
        user: action.user
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        request: false,
        error: action.err
      };
    default:
      return state;
  }
};
