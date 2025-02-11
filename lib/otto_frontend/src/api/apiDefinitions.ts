import { LoginBody, LoginResponse, LogoutResponse } from "@/types/api";

export const baseAPI = import.meta.env.VITE_BASE_API_URL;

enum ApiMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export enum EndpointKeys {
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT',
}

export interface EndpointType<Params, Body, Response> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  url: (arg: any) => string;
  queryParams?: Params;
  body?: Body;
  response: Response;
}

export interface ApiEndpointsType {
  [EndpointKeys.USER_LOGIN]: EndpointType<null, LoginBody, LoginResponse>;
  [EndpointKeys.USER_LOGOUT]: EndpointType<null, null, LogoutResponse>;
}

export const Endpoints = {
  [EndpointKeys.USER_LOGIN]: {
    url: () => `/login/`,
    method: ApiMethods.POST,
  },
  [EndpointKeys.USER_LOGOUT]: {
    url: () => `/logout/`,
    method: ApiMethods.POST,
  },
}
