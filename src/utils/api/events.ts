import { IEvent } from '@/types/common.types';
import axios from 'axios';

export const getContacts = async () => {
  const { data } = await axios.get<IEvent[]>('/api/events');
  return data;
};
