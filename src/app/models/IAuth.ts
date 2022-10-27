export interface ILoginRequest {
  username: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  token_type: string;
  role_id: number;
}

export interface IRegisterRequest {
  username: string;
  email: string;
  phone: string;
  name: string;
  password: string;
  roleId: number;
}
