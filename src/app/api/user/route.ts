import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  try {
    if (!username || !password)
      return NextResponse.json({ message: 'Bad Credentials' }, { status: 422 });

    const existingUser = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (existingUser)
      return NextResponse.json(
        { message: 'User with this email alredy exists' },
        { status: 400 }
      );

    const hashedPassword = await bcrypt.hash(password, 13);

    const user = await prisma.user.create({
      data: {
        username,
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
