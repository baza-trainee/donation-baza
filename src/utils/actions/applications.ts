'use server';

import { IApplicationData } from '@/types/common.types';
import { applications } from '@/lib/db/schema';
import { db } from '@/lib/db/db';

export const createApplication = async (values: IApplicationData) => {
  try {
    await db.insert(applications).values(values).returning();
    return {
      success: true,
      message: 'Application sent successfully',
    };
  } catch (error: unknown) {
    return error instanceof Error ? { error: error.message } : { error };
  }
};

export const fetchApplications = async () => {
  try {
    const res = await db.query.applications.findMany();
    return res;
  } catch (error: unknown) {
    return error instanceof Error ? { error: error.message } : { error };
  }
};
