import { Dispatch } from '@reduxjs/toolkit';
import { tokenApi } from '../common/apis';
import { authActions, SignInRequestPayload } from '../reducers/authReducer';

export const signIn = (payload: SignInRequestPayload) => async (dispatch: Dispatch) => {
  dispatch(authActions.signInRequest(payload));
  try {
    const token = await tokenApi.create<string>(payload);
    dispatch(authActions.signInSuccess({ token, user: { username: payload.username } }));
  } catch (error) {
    dispatch(authActions.signInFailure());
  }
};
