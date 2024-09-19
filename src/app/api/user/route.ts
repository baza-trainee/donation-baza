import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  try {
    if (!email || !password)
      return NextResponse.json({ message: 'Bad Credentials' }, { status: 422 });

    const existingUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (existingUser)
      return NextResponse.json(
        { message: 'User with this email alredy exists' },
        { status: 400 }
      );

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: 'User successfully created', user },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
