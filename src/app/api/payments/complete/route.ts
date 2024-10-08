/* eslint-disable no-console */
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    return await NextResponse.redirect('/?payment=success');
  } catch (error) {
    console.error(error);
    return new NextResponse(`Can't get payment url${error}`, { status: 500 });
  }
}
