import Axios from 'axios';

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_RAWG_URL,
  params: {
    key: import.meta.env.VITE_API_RAWG_API_KEY,
  },
});
