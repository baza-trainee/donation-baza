import * as zod from 'zod';

export const DocumentModel = zod.object({
  id: zod.string(),
  key: zod.string(),
  url: zod.string(),
  publicId: zod.string(),
});
