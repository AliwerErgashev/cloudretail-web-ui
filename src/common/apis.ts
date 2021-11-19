import { createApi } from './createApi';

type Credentials = {
  username: string;
  password: string;
};

type AccessToken = {
  id: string;
  created_at: string;
  user_id: string;
  user: { username: string };
};

export const tokenApi = createApi<Credentials, AccessToken>('access-tokens');
