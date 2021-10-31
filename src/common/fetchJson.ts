type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

enum HEADERS {
  ACCEPTS = 'Accepts',
  CONTENT_TYPE = 'Content-Type',
}

enum CONTENT_TYPES {
  JSON = 'application/json',
}

const isSuccess = (response: Response) => {
  return response.status >= 200 && response.status < 300;
};

export const fetchJson = async <T = unknown>(method: Method, path: string, payload?: unknown) => {
  const headers = {
    [HEADERS.ACCEPTS]: CONTENT_TYPES.JSON,
    [HEADERS.CONTENT_TYPE]: CONTENT_TYPES.JSON,
  };
  const body = payload ? JSON.stringify(payload) : null;
  const response = await fetch(path, { method, headers, body });
  const text = await response.text();
  try {
    const json = JSON.parse(text);
    if (isSuccess(response)) {
      return json as T;
    } else {
      throw new Error(json.message);
    }
  } catch (error) {
    throw new Error(text);
  }
};
