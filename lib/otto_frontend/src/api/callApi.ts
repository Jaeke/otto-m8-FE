import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { Endpoints, ApiEndpointsType, EndpointKeys, baseAPI } from './apiDefinitions';

const api = axios.create({
  baseURL: baseAPI,
  withCredentials: true,
});

// Request interceptor to add the Authorization header to every request
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('authToken');

    // Ensure config.headers is an object
    if (!config.headers) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      config.headers = {};
    }

    // Retrieve the accessToken from localStorage
    if (accessToken) {
      // Correctly typed assignment to headers
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) =>
    // Do something with request error
    Promise.reject(error),
);

// Resposne interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Integrate Sentry or any other error monitoring tool here
    // Sentry.captureException(error);
    // eslint-disable-next-line no-console
    console.log(error);
    return Promise.reject(error);
  },
);

const callApi = async <Endpoint extends EndpointKeys>(
  config: AxiosRequestConfig & {
    endpoint: Endpoint;
    params?: ApiEndpointsType[Endpoint]['queryParams'];
    data?: ApiEndpointsType[Endpoint]['body'];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    urlParams?: any;
  },
): Promise<AxiosResponse<ApiEndpointsType[Endpoint]['response']>> =>
  api.request<ApiEndpointsType[Endpoint]['response']>({
    ...config,
    method: Endpoints[config.endpoint].method,
    url: Endpoints[config.endpoint].url(config.urlParams),
  });

export default callApi;
