import { createApi } from './createApi';

export const tokenApi = createApi<{ username: string; password: string }, { id: string }>(
  'access-tokens'
);
