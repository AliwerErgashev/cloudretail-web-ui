import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  username: string;
};

const initialState = {
  isSignedIn: false,
  isSigningIn: false,
  token: null as string | null,
  user: null as User | null,
};

export type SignInRequestPayload = {
  username: string;
  password: string;
};

type SignInSuccessPayload = {
  token: string;
  user: User;
};

export const { actions: authActions, reducer: authReducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInRequest: (state, _action: PayloadAction<SignInRequestPayload>) => {
      state.isSigningIn = true;
    },
    signInSuccess: (state, { payload }: PayloadAction<SignInSuccessPayload>) => {
      state.isSigningIn = false;
      state.isSignedIn = true;
      state.token = payload.token;
      state.user = payload.user;
    },
    signInFailure: (state) => {
      state.isSigningIn = false;
      state.isSignedIn = false;
      state.user = null;
    },
  },
});
