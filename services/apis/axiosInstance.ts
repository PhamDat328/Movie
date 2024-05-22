import { IMessage } from '@/interfaces/common';
import axios, { AxiosError } from 'axios';

const axiosInstant = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmQ1NmU4MjljZTI0NDNlODBkZWU1MGFkNTQyOWVmYyIsInN1YiI6IjY0NTNjMzQzYzA0NDI5MDE2NGViNjMwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yGNMRTPPfZf1UKDGueguGt16IzAiU_-C548_00knH3s`,
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
