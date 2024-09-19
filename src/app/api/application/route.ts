import { IApplicationData } from '@/types/common.types';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const applications = await prisma.application.findMany();
    return NextResponse.json(applications, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const values: IApplicationData = await request.json();
  try {
    const res = await prisma.application.create({
      data: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      },
    });
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
