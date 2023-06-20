import { AxiosResponse } from 'axios';
import { instance } from './instance';
import { isAxiosError } from 'axios';

export interface ReservationType {
  id: string | undefined;
  roomId: string | undefined;
  userId: string | undefined;
  time: string[] | undefined;
}

export const getReservations = async () => {
  try {
    const response: AxiosResponse = await instance.get('/reservations');
    return response.data;
  } catch (e) {
    if (isAxiosError(e)) {
      console.log(e.response?.data);
      throw e;
    }
  }
};
