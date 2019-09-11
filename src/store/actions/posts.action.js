import axios from 'axios';
import store from '../index';
import { types } from '../action-types';
import { dbUrl } from '../../config';
import qs from 'qs';

export function doFetchPosts() {
  return axios.get(`${dbUrl}/posts`)
    .then(resp => {
      return store.dispatch({
        type: types.FETCH_POSTS_SUCCESS,
        payload: resp.data
      })
    })
    .catch(err => {
      return store.dispatch({
        type: types.FETCH_POSTS_FAILED,
        err
      })
    });
}

export function doAddPost(payload) {
  return axios.post(`${dbUrl}/posts`, payload)
    .then(resp => resp.status)
    .catch(err => err);
}

export function doFetchPostDetails(id) {
  return axios.get(`${dbUrl}/posts/${id}`)
    .then(resp => {
      return store.dispatch({
        type: types.FETCH_SINGLE_POST_SUCCESS,
        payload: resp.data
      })
    })
    .catch(err => {
      return store.dispatch({
        type: types.FETCH_SINGLE_POST_FAILED,
        err
      })
    });
}


const putRequestConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
export function doUpdatePostDetails(payload) {
  return axios.put(`${dbUrl}/posts/${payload.id}`, qs.stringify(payload), putRequestConfig)
    .then(resp => resp.status)
    .catch(err => err);
}

export function doDeletePost(id) {
  return axios.delete(`${dbUrl}/posts/${id}`)
    .then(resp => resp.status)
    .catch(err => err);
}