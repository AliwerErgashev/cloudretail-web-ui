import { createAsyncThunk } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router';
import { tokenApi } from '../common/apis';
import { signInUrl } from '../common/constants';

type Navigate = {
  navigate: NavigateFunction;
};

export const fetchToken = createAsyncThunk('restoreSession', async ({ navigate }: Navigate) => {
  const tokenId = window.localStorage.getItem('token');
  if (typeof tokenId !== 'string') {
    return;
  }
  try {
    const token = await tokenApi.fetch(tokenId);
    return token;
  } catch (error) {
    navigate(signInUrl);
  }
});

type Credentials = {
  username: string;
  password: string;
};

export const createToken = createAsyncThunk(
  'createToken',
  async ({ navigate, credentials }: Navigate & { credentials: Credentials }) => {
    const { id } = await tokenApi.create(credentials);
    window.localStorage.setItem('token', id);
    navigate('/');
    return { token: id, user: { username: credentials.username } };
  }
);

export const deleteToken = createAsyncThunk('deleteToken', async ({ navigate }: Navigate) => {
  const tokenId = window.localStorage.getItem('token');
  console.log('tokenId', tokenId);
  if (typeof tokenId !== 'string') {
    return;
  }
  await tokenApi.delete(tokenId);
  navigate(signInUrl);
});
