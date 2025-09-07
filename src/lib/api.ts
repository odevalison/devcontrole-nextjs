import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: process.env.HOST_URL as string,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    } else if (error instanceof Error) {
      throw Error(error.message);
    }
  },
);

export { api };
