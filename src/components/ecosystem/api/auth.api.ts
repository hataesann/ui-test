import { apiClient } from './apiClient';

export interface AuthType {
  userName: string;
  password: string;
}

export const Login = async (data: AuthType) => {
  await apiClient.post('auth/login', data, { withCredentials: true });
};

export const Singin = async (data: AuthType) => {
  await apiClient.put('auth/singin', data);
};
