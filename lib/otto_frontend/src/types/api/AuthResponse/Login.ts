export type LoginBody = URLSearchParams;

export interface LoginResponse {
  access_token: string;
  token_type: 'bearer' | string;
}
