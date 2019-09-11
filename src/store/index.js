import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';
const showActions = true;
const store = createStore(reducers, showActions && applyMiddleware(logger));

export default store;

