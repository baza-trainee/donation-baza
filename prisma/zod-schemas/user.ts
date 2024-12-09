import * as zod from 'zod';

export const UserModel = zod.object({
  id: zod.string(),
  email: zod.string(),
  password: zod.string(),
  createdAt: zod.date(),
  updatedAt: zod.date(),
});
