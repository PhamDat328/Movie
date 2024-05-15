import { IMessage } from '@/interfaces/common';
import axios, { AxiosError } from 'axios';

const requestAPI = (endpoint: string, body: unknown, method: string) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const instance = axios.create({ headers });

  instance.interceptors.request.use(
    (config) => {
      config.headers['authorization'] =
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmQ1NmU4MjljZTI0NDNlODBkZWU1MGFkNTQyOWVmYyIsInN1YiI6IjY0NTNjMzQzYzA0NDI5MDE2NGViNjMwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yGNMRTPPfZf1UKDGueguGt16IzAiU_-C548_00knH3s';

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (res) => {
      console.log(res);

      return res;
    },
    async (err) => {
      // const originalConfig = err.config;
      // console.log("AccessToken expired");
      // console.log(err);
      // if (err.response && err.response.status === 404) {
      //   try {
      //     console.log("Call refresh token api");
      //     const result = await instance.get(
      //       `http://localhost:8080/user/gain-access`,
      //     );
      //     localStorage.setItem("accessToken", result.data.metadata.AT);
      //     originalConfig.headers["authorization"] = result.data.metadata.AT;
      //     return instance(originalConfig);
      //   } catch (_error) {
      //     window.location.href = "/login";
      //     return Promise.reject(_error);
      //   }
      // }
      // return Promise.reject(err);
    }
  );

  // instance.interceptors.response.use(
  //   function (response) {
  //     return response.data;
  //   },
  //   function (error: AxiosError) {
  //     return Promise.reject(error.response?.data as IMessage);
  //   }
  // );

  return instance.request({
    method: method,
    data: body,
    url: `https://api.themoviedb.org/3${endpoint}`,
  });
};

export default requestAPI;
