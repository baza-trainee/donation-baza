import { IContactData } from '@/types/common.types';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const documents = await prisma.contact.findMany();
    return NextResponse.json(documents, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const values: IContactData = await request.json();

    const res = await prisma.contact.create({
      data: {
        phone1: values.phone1,
        phone2: values.phone2,
        email: values.email,
        linkedin: values.linkedin,
        facebook: values.facebook,
        telegram: values.telegram,
      },
    });
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
