import { Dispatch } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router';
import { tokenApi } from '../common/apis';
import { authActions, SignInRequestPayload } from '../reducers/authReducer';

type NavigatePayload = {
  navigate: NavigateFunction;
};

export const signIn =
  ({ navigate, ...payload }: NavigatePayload & SignInRequestPayload) =>
  async (dispatch: Dispatch) => {
    dispatch(authActions.signInRequest(payload));
    try {
      const token = await tokenApi.create<string>(payload);
      dispatch(authActions.signInSuccess({ token, user: { username: payload.username } }));
      navigate('/');
    } catch (error) {
      dispatch(authActions.signInFailure());
    }
  };
