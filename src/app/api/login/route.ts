import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { lucia } from '@/lib/lucia';
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

    if (!existingUser) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (!existingUser.password) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const isValidPassword = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Incorrect username or password' },
        { status: 401 }
      );
    }

    const currentDate = new Date();

    const session = await lucia.createSession(existingUser.id, {
      expiresAt: new Date(currentDate.getTime() + 60 * 60 * 24 * 30 * 1000),
    });

    const sessionCookie = lucia.createSessionCookie(session.id);

    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    return NextResponse.json(
      { message: 'User successfully logged in' },
      { status: 200 }
    );
  } catch (error: unknown) {
    return NextResponse.json(
      { message: `An error occurred ${error}` },
      { status: 500 }
    );
  }
}
