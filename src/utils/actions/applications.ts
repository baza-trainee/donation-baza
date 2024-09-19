'use server';

import { IApplicationData } from '@/types/common.types';
import prisma from '@/lib/prisma';

export const createApplication = async (values: IApplicationData) => {
  try {
    await prisma.application.create({
      data: {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
      },
    });
    return {
      success: true,
      message: 'Application sent successfully',
    };
  } catch (error: unknown) {
    return error instanceof Error ? { error: error.message } : { error };
  }
};
