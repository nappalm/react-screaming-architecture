import assert from 'assert';
import Axios from 'axios';

assert(
  import.meta.env.NEXT_PUBLIC_API_BASE_URL,
  'env variable not set: NEXT_PUBLIC_API_BASE_URL (did you forget to create a .env file from .env.template?)',
);

export const axios = Axios.create({
  baseURL: import.meta.env.NEXT_PUBLIC_API_BASE_URL,
});
