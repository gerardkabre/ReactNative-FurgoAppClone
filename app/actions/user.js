import { Auth } from 'aws-amplify';
import { Actions } from 'react-native-navigation-actions';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export function fetchUser() {
  return {
    type: FETCH_USER_REQUEST
  };
}

export function fetchUserSuccess(user) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user
  };
}

export function fetchUserError(err) {
  return {
    type: FETCH_USER_ERROR,
    payload: err
  };
}

export function logIn(data) {
  return dispatch => {
    dispatch(fetchUser());
    return Auth.signIn(data.username, data.password)
      .then(res => {
        console.log(res)
        dispatch(fetchUserSuccess(res));
        Actions.navigate('App');
      })
      .catch(err => {
        dispatch(fetchUserError(err));
      });
  };
}

export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

export function createUser() {
  return {
    type: CREATE_USER_REQUEST
  };
}

export function createUserSuccess(user) {
  return {
    type: CREATE_USER_SUCCESS,
    payload: user
  };
}

export function createUserError(err) {
  return {
    type: CREATE_USER_ERROR,
    payload: err
  };
}

export function register(data) {
  return dispatch => {
    dispatch(createUser());
    return Auth.signUp(data)
      .then(res => {
        dispatch(createUserSuccess(res));
        Actions.navigate('SignIn');
      })
      .catch(err => {
        dispatch(createUserError(err));
      });
  };
}
