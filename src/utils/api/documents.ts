import { IDocument } from '@/types/common.types';
import axios from 'axios';

export const getDocuments = async () => {
  const { data } = await axios.get<IDocument[]>('/api/documents');
  return data;
};
