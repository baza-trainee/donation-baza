import { ApiContract } from './contract';
import { generateOpenApi } from '@ts-rest/open-api';

export const OpenAPIV1 = generateOpenApi(ApiContract, {
  info: {
    title: 'Donation Baza API',
    version: '1.0.0',
    description: 'The description of the Donation Baza API',
  },
});
