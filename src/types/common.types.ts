import { locales } from '@/i18n/routing';

export interface ILoginData {
  email: string;
  password: string;
}

export interface IApplicationData {
  name: string;
  email: string;
  message: string;
}

export interface IApplication extends IApplicationData {
  id: string;
  createdAt: Date;
}

export interface IDocumentData {
  key: string;
  file: File;
}

export interface IDocument {
  key: string;
  url: string;
}

export interface IContactData {
  phone1: string;
  phone2: string;
  email: string;
  linkedin: string;
  facebook: string;
  telegram: string;
}

export interface IContact extends IContactData {
  id: string;
}

export interface IEventData {
  image: File;
  title: string;
  text: string;
}

export interface IEvent {
  id: string;
  title: string;
  text: string;
  imageUrl: string;
  imageId: string;
  createdAt: Date;
}

export type Locale = (typeof locales)[number];
