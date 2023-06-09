import { AxiosResponse } from 'axios';
import { instance } from './instance';
import { isAxiosError } from 'axios';

export interface UserType {
  id: string | undefined;
  name: string | undefined;
  depart: string | undefined;
  avatar: string | undefined;
}

export const getUsers = async () => {
  try {
    const response: AxiosResponse = await instance.get('/users');
    return response.data;
  } catch (e) {
    if (isAxiosError(e)) {
      console.log(e.response?.data);
      throw e;
    }
  }
};
