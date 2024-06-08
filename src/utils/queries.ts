import { axiosInstance } from './lib/axiosHelper';
import { LoggedUser, Register } from './typings';

export async function registerUser(data: Register) {
  try {
    const response = await axiosInstance.post('auth/register', data);
    if (response.status !== 201) {
      throw new Error('Unable to Create User');
    }
    const user: LoggedUser = {
      ...response.data,
    };
    return user;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
}
export async function loginUser(data: { email: string; password: string }) {
  try {
    const response = await axiosInstance.post('auth/login', data);
    if (response.status !== 200) {
      throw new Error('Unable to Login User');
    }
    const user: LoggedUser = {
      ...response.data,
    };
    return user;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
}
