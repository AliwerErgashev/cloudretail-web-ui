import { combineReducers } from '@reduxjs/toolkit';
import { authReducer as auth } from '../reducers/authReducer';

export const reducer = combineReducers({ auth });
