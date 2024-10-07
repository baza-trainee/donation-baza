import { IApplication, IApplicationData } from '@/types/common.types';
import axios from 'axios';

export const getApplications = async () => {
  const { data } = await axios.get<IApplication[]>('/api/application');
  return data;
};

export const postApplication = async (values: IApplicationData) => {
  const { data } = await axios.post<IApplication[]>('/api/application', values);
  return {
    status: 200,
    data,
  };
};
