type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

enum HEADERS {
  ACCEPTS = 'Accepts',
  CONTENT_TYPE = 'Content-Type',
}

enum CONTENT_TYPES {
  JSON = 'application/json',
}

export const fetchJson = async <T = unknown>(method: Method, path: string, payload?: unknown) => {
  const headers = {
    [HEADERS.ACCEPTS]: CONTENT_TYPES.JSON,
    [HEADERS.CONTENT_TYPE]: CONTENT_TYPES.JSON,
  };
  const body = payload ? JSON.stringify(payload) : null;
  const response = await fetch(path, {
    method,
    headers,
    body,
  });
  return response.json() as Promise<T>;
};
