import { IApplicationData } from '@/types/common.types';
import axios from 'axios';

interface IApplicationResponse extends IApplicationData {
  id: string;
  createdAt: Date;
}

export const getApplications = async () => {
  const { data } = await axios.get<IApplicationResponse[]>('/api/application');
  return data;
};

export const postApplication = async (values: IApplicationData) => {
  const { data } = await axios.post<IApplicationResponse[]>(
    '/api/application',
    values
  );
  return data;
};
