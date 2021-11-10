import { createSlice } from '@reduxjs/toolkit';
import { createToken, fetchToken } from '../thunks/authThunk';

const initialState = {
  isInitializing: true,
  isSignedIn: false,
  isSigningIn: false,
  token: null as string | null,
  user: null as { username: string } | null,
};

export type SignInRequestPayload = {
  username: string;
  password: string;
};

export const { actions: authActions, reducer: authReducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createToken.pending, (state) => {
      state.isInitializing = false;
      state.isSigningIn = true;
    });
    builder.addCase(createToken.fulfilled, (state, { payload }) => {
      state.isSigningIn = false;
      state.isSignedIn = true;
      state.token = payload.token;
      state.user = payload.user;
    });
    builder.addCase(createToken.rejected, (state) => {
      state.isSigningIn = false;
      state.isSignedIn = false;
      state.user = null;
    });
    builder.addCase(fetchToken.pending, (state) => {
      state.isInitializing = false;
      state.isSigningIn = true;
    });
    builder.addCase(fetchToken.fulfilled, (state) => {
      state.isSigningIn = false;
      state.isSignedIn = true;
    });
    builder.addCase(fetchToken.rejected, (state) => {
      state.isSigningIn = false;
      state.isSignedIn = false;
      state.user = null;
    });
  },
});
