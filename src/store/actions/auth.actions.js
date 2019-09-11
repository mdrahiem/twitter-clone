import axios from 'axios';
import store from '../index';
import { types } from '../action-types';
import { dbUrl } from '../../config';
import { saveUser, removeUser, getUser } from '../../utils/saveAuth';

export function doLogin(payload) {
  return axios.get(`${dbUrl}/users`)
    .then(resp => {
      const currentUserIndex = resp.data.findIndex(d => d.userName === payload.userName && d.password === payload.password);
      if (
        resp.data &&
        currentUserIndex !== -1
      ) {
        const userDetails = resp.data[currentUserIndex];
        saveUser(userDetails);
        return store.dispatch({
          type: types.LOGIN_SUCCESS,
          payload: userDetails
        })
      } else {
        return store.dispatch({
          type: types.LOGIN_FAILED,
          err: true
        })
      }
      
    })
    .catch(err => {
      return store.dispatch({
        type: types.LOGIN_FAILED,
        err
      })
    });
}

export function doSignUp(payload) {
  return axios.post(`${dbUrl}/users`, payload)
    .then(resp => resp.status)
    .catch(err => err);
}

export function restoreUser() {
  getUser();
}

export function doLogout() {
  removeUser();
  store.dispatch({
    type: types.LOGOUT_SUCCESS
  })
}