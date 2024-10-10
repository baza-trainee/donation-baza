import { IContact } from '@/types/common.types';
import axios from 'axios';

export const getContacts = async () => {
  const { data } = await axios.get<IContact[]>('/api/contacts');
  return data[0];
};
