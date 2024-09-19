'use server';

import { IApplicationData } from '@/types/common.types';
import { applications } from '@/lib/db/schema';
import { db } from '@/lib/db/db';
import { revalidatePath } from 'next/cache';

export const createApplication = async (values: IApplicationData) => {
  try {
    await db.insert(applications).values(values).returning();
  } catch (error: unknown) {
    return error instanceof Error ? { error: error.message } : { error };
  }
  revalidatePath('/');
  return {
    success: true,
    message: 'Application sent successfully',
  };
};
