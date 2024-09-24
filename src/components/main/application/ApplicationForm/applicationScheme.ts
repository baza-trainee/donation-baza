import { emailPattern, restrictedDomens } from '@/constants/regEx';
import { z } from 'zod';

export const applicationScheme = z.object({
  name: z
    .string()
    .min(1, 'Введіть ім’я')
    .min(2, 'Ім’я повинно мати не менше 2 знаків')
    .max(30, 'Ім’я повинно бути не більше 30 знаків'),
  email: z
    .string()
    .min(1, 'Введіть email')
    .regex(emailPattern, {
      message: 'Введіть дійсний email',
    })
    .refine((value) => !restrictedDomens.test(value.split('@')[1]), {
      message: 'Домени .ru і .by не дозволені',
    }),
  message: z
    .string()
    .min(1, 'Введіть повідомлення')
    .max(300, 'Просимо скоротити ваше повідомлення до 300 знаків'),
});
