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
  GET_WORKFLOWS = "GET_WORKFLOWS",
  CREATE_DRAFT_WORKFLOW = "CREATE_DRAFT_WORKFLOW",
  UPDATE_DRAFT_WORKFLOW = "UPDATE_DRAFT_WORKFLOW",
  DEPLOY_WORKFLOW = "DEPLOY_WORKFLOW",
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
  [EndpointKeys.GET_WORKFLOWS]: EndpointType<null, null, null>;
  [EndpointKeys.CREATE_DRAFT_WORKFLOW]: EndpointType<null, null, null>;
  [EndpointKeys.UPDATE_DRAFT_WORKFLOW]: EndpointType<null, null, null>;
  [EndpointKeys.DEPLOY_WORKFLOW]: EndpointType<null, null, null>;
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
  [EndpointKeys.GET_WORKFLOWS]: {
    url: () => `/workflows/`,
    method: ApiMethods.GET,
  },
  [EndpointKeys.CREATE_DRAFT_WORKFLOW]: {
    url: () => `/create_draft_workflow/`,
    method: ApiMethods.POST,
  },
  [EndpointKeys.UPDATE_DRAFT_WORKFLOW]: {
    url: () => `/update_draft_workflow/`,
    method: ApiMethods.POST,
  },
  [EndpointKeys.DEPLOY_WORKFLOW]: {
    url: () => `/deploy_workflow/`,
    method: ApiMethods.POST,
  },
}
