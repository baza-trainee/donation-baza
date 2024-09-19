import { ILoginData } from '@/types/common.types';
import axios from 'axios';

export const loginUser = async (values: ILoginData) => {
  const { data } = await axios.post('/api/login', values);
  return {
    status: 200,
    data,
  };
};
