/* eslint-disable require-unicode-regexp */
import { emailPattern, restrictedDomains } from '@/constants/regEx';
import { z } from 'zod';

export const applicationScheme = z.object({
  name: z
    .string()
    .min(1, 'validation.name.required')
    .min(2, 'validation.name.min')
    .max(30, 'validation.name.max')
    .regex(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐąćęłńóśźżĄĆĘŁŃÓŚŹŻ''-\s]+$/, {
      message: 'validation.name.invalid_chars',
    })
    .refine((value) => value.trim().length > 0, {
      message: 'validation.name.empty',
    }),
  email: z
    .string()
    .min(1, 'validation.email.required')
    .regex(emailPattern, {
      message: 'validation.email.invalid',
    })
    .refine((value) => !restrictedDomains.test(value.split('@')[1]), {
      message: 'validation.email.restricted_domain',
    }),
  message: z
    .string()
    .min(1, 'validation.message.required')
    .max(300, 'validation.message.max')
    .refine((value) => value.trim().length > 0, {
      message: 'validation.message.empty',
    }),
});
