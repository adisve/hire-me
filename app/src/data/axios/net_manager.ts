import axios from "axios";

export const createRequestURL = (
  baseUrl: string,
  queryParams: Record<string, any>
): string => {
  queryParams.accessToken = import.meta.env.VITE_ACCESS_TOKEN;
  const urlParams = new URLSearchParams(queryParams);
  return `${baseUrl}?${urlParams}`;
};

export const get = (url: string): Promise<any> => {
  let request = axios.get(url, {
    withCredentials: true,
    timeout: 10000,
  });
  return request;
};

export const post = (url: string): Promise<any> => {
  let request = axios.post(url, {
    withCredentials: true,
    timeout: 10000,
  });
  return request;
};
