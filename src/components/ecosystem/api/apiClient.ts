import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:4000/api/',
});

export const apiErrorMessage = (e: unknown) => {
  if (axios.isAxiosError(e)) {
    console.log(e);
    return e.message;
  }
  return 'Error';
};
