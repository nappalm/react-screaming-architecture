import Axios from 'axios';

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_BASE_URL,
});
