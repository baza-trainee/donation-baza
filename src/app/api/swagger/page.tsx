/* eslint-disable sort-imports */
'use client';

import { OpenAPIV1 } from '@/lib/ts-rest';

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function OpenApiDocsPage() {
  return <SwaggerUI spec={OpenAPIV1} displayOperationId={true} />;
}
