import { combineReducers } from 'redux';
import { authReducer as auth } from '../reducers/authReducer';

export const reducer = combineReducers({ auth });
