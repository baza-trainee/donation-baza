import { IContactData } from '@/types/common.types';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const values: IContactData = await request.json();

    const res = await prisma.contact.update({
      where: {
        id: params.id,
      },
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
