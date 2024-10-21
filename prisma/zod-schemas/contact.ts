import * as zod from 'zod';

export const ContactModel = zod.object({
  id: zod.string(),
  phone1: zod.string(),
  phone2: zod.string(),
  email: zod.string(),
  linkedin: zod.string(),
  facebook: zod.string(),
  telegram: zod.string(),
});
