import { apiPrefix } from './constants';
import { fetchJson } from './fetchJson';

export const createApi = <T = unknown>(path: string) => {
  const fullPath = `${apiPrefix}/${path}`;
  return {
    fetchAll: <U = T>() => {
      return fetchJson<U[]>('GET', fullPath);
    },
    fetch: <U>(id: string) => {
      return fetchJson<U>('GET', `${fullPath}/${id}`);
    },
    create: <U = T>(body: unknown) => {
      return fetchJson<U>('POST', fullPath, body);
    },
    update: <U = T>(id: string, body: unknown) => {
      return fetchJson<U>('PUT', `${fullPath}/${id}`, body);
    },
    delete: <U = void>(id: string) => {
      return fetchJson<U>('DELETE', `${fullPath}/${id}`);
    },
  };
};
