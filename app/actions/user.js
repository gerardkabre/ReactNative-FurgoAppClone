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
        dispatch(fetchUserSuccess(res));
        Actions.navigate('App')
      })
      .catch(err => {
        dispatch(fetchUserError(err));
      });
  };
}
