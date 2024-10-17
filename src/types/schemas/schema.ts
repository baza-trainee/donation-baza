import * as zod from 'zod';

export const ApplicationSchema = zod.object({
  id: zod.string(),
  name: zod.string(),
  email: zod.string(),
  message: zod.string(),
  createdAt: zod.date(),
});

export const ContactSchema = zod.object({
  id: zod.string(),
  phone1: zod.string(),
  phone2: zod.string(),
  email: zod.string(),
  linkedin: zod.string(),
  facebook: zod.string(),
  telegram: zod.string(),
});

export const DocumentSchema = zod.object({
  id: zod.string(),
  key: zod.string(),
  url: zod.string(),
  publicId: zod.string(),
});

export const EventSchema = zod.object({
  id: zod.string(),
  imageUrl: zod.string(),
  imageId: zod.string(),
  title: zod.string(),
  text: zod.string(),
  createdAt: zod.date(),
});

export const UserSchema = zod.object({
  id: zod.string(),
  email: zod.string(),
  password: zod.string(),
  createdAt: zod.date(),
  updatedAt: zod.date(),
});
