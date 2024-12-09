import * as zod from 'zod';

export const EventModel = zod.object({
  id: zod.string(),
  imageUrl: zod.string(),
  imageId: zod.string(),
  title: zod.string(),
  text: zod.string(),
  createdAt: zod.date(),
});
