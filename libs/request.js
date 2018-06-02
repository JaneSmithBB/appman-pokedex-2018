import axios from 'axios';

export function getJson(url, params = {}) {
  const options = {
    method: 'GET',
    url,
    headers: { 'Content-Type': 'application/json' },
    params,
  };

  return axios(options);
}