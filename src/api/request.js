import fetch from 'isomorphic-fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  if (response.status === 401) {
    return;
  }

  return response.json().then((result) => {
    if (result.code !== 0) {
      // TODO: 处理后台反馈的错误
      console.log('something wrong', result.code);
    }
    if (result.stack) {
      // TODO: 处理异常错误
       ('something wrong', result.stack);
    }
    const error = new Error(result.message);
    error.response = response;
    throw error;
  });
}

function parseJSON(response) {
  return response.json();
}

const sendRequest = (method, auth) => (url, data) => {
  const token = '222'
  const headers = auth === 'noAuth' ? undefined : { Authorization: `Bearer ${token}` };

  return fetch(url, {
    method,
    headers,
    body: (method === 'POST' || method === 'PUT') ? JSON.stringify(data) : undefined,
  })
    .then(checkStatus)
    .then(parseJSON)
    .then((res) => {
      console.groupEnd();
      return res;
    })
    .catch((error) => {
      console.groupEnd();
      throw new Error(error);
    });
};
// TODO: encryption

const request = {
  post(url, data) {
    return sendRequest('POST')(url, data);
  },
  get(url) {
    return sendRequest('GET')(url);
  },

};

export default request;
