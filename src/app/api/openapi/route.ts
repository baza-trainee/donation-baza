import { NextResponse } from 'next/server';
import { OpenAPIV1 } from '@/lib/ts-rest';

export async function GET() {
  return await NextResponse.json(OpenAPIV1);
}
