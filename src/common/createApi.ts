import { apiPrefix } from './constants';
import { fetchJson } from './fetchJson';

export const createApi = <T = unknown, U = T>(path: string) => {
  const fullPath = `${apiPrefix}/${path}`;
  return {
    fetchAll: () => {
      return fetchJson<U[]>('GET', fullPath);
    },
    fetch: (id: string) => {
      return fetchJson<U>('GET', `${fullPath}/${id}`);
    },
    create: (body: T) => {
      return fetchJson<U>('POST', fullPath, body);
    },
    update: (id: string, body: T) => {
      return fetchJson<U>('PUT', `${fullPath}/${id}`, body);
    },
    delete: (id: string) => {
      return fetchJson<void>('DELETE', `${fullPath}/${id}`);
    },
  };
};
