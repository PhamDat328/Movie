import { IMessage } from '@/interfaces/common';
import axios, { AxiosError } from 'axios';

const axiosInstant = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
  },
});

axiosInstant.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error: AxiosError) {
    return Promise.reject(error.response?.data as IMessage);
  }
);

export default axiosInstant;
