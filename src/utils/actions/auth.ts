'use server';

import { lucia, validateRequest } from '@/lib/lucia';
import { cookies } from 'next/headers';

export const signOut = async () => {
  try {
    const { session } = await validateRequest();

    if (!session) {
      return {
        error: 'Unauthorized',
      };
    }

    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();

    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
  } catch (error: unknown) {
    return error instanceof Error ? { error: error.message } : { error };
  }
};
