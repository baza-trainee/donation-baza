import * as zod from 'zod';

export const ApplicationModel = zod.object({
  id: zod.string(),
  name: zod.string(),
  email: zod.string(),
  message: zod.string(),
  createdAt: zod.date(),
});
