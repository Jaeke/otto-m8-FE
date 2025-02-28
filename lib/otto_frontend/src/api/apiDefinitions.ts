import { DeleteDraftWorkflowResponse, DraftWorkflow, LoginBody, LoginResponse, PostDraftWorkflowBody, PostDraftWorkflowResponse } from "@/types/api";

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
  GET_DRAFT_WORKFLOWS = "GET_DRAFT_WORKFLOWS",
  CREATE_DRAFT_WORKFLOW = 'CREATE_DRAFT_WORKFLOW',
  DELETE_DRAFT_WORKFLOW = 'DELETE_DRAFT_WORKFLOW'
}

export interface EndpointType<Params, Body, Response> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  url: (arg: any) => string;
  queryParams?: Params;
  body?: Body;
  response: Response;
}

export interface ApiEndpointsType {
  // Auth
  [EndpointKeys.USER_LOGIN]: EndpointType<null, LoginBody, LoginResponse>;
  // Workflows
  [EndpointKeys.GET_DRAFT_WORKFLOWS]: EndpointType<null, null, DraftWorkflow[]>;
  [EndpointKeys.CREATE_DRAFT_WORKFLOW]: EndpointType<null, PostDraftWorkflowBody, PostDraftWorkflowResponse>;
  [EndpointKeys.DELETE_DRAFT_WORKFLOW]: EndpointType<null, null, DeleteDraftWorkflowResponse>;
}

export const Endpoints: Record<
  EndpointKeys,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { url: (arg?: any) => string; method: ApiMethods }
> = {
  [EndpointKeys.USER_LOGIN]: {
    url: () => `/login`,
    method: ApiMethods.POST,
  },
  [EndpointKeys.GET_DRAFT_WORKFLOWS]: {
    url: () => `/get_draft_workflows`,
    method: ApiMethods.GET,
  },
  [EndpointKeys.CREATE_DRAFT_WORKFLOW]: {
    url: () => `/create_draft_workflows`,
    method: ApiMethods.POST,
  },
  [EndpointKeys.DELETE_DRAFT_WORKFLOW]: {
    url: (templateId: number) => `/delete_draft_workflow/${templateId}`,
    method: ApiMethods.POST,
  },
}
