import {
  ApplicationSchema,
  ContactSchema,
  DocumentSchema,
  EventSchema,
  UserSchema,
} from '@/types/schemas/schema';
import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const contract = initContract();

export const ApiContract = contract.router({
  // User endpoints
  createUser: {
    method: 'POST',
    path: '/api/users',
    responses: {
      201: UserSchema,
    },
    body: UserSchema.omit({ id: true, createdAt: true, updatedAt: true }),
    summary: 'Create a user',
  },

  getUser: {
    method: 'GET',
    path: '/api/users/:id',
    responses: {
      200: UserSchema.nullable(),
    },
    summary: 'Get a user by id',
  },

  // Application endpoints
  createApplication: {
    method: 'POST',
    path: '/api/applications',
    responses: {
      201: ApplicationSchema,
    },
    body: ApplicationSchema.omit({ id: true, createdAt: true }),
    summary: 'Create an application',
  },

  getApplications: {
    method: 'GET',
    path: '/api/applications',
    responses: {
      200: z.array(ApplicationSchema),
    },
    summary: 'Get all applications',
  },

  // Document endpoints
  createDocument: {
    method: 'POST',
    path: '/api/documents',
    responses: {
      201: DocumentSchema,
    },
    body: DocumentSchema.omit({ id: true }),
    summary: 'Create a document',
  },
  getDocument: {
    method: 'GET',
    path: '/api/documents/:id',
    responses: {
      200: DocumentSchema.nullable(),
    },
    summary: 'Get a document by id',
  },

  // Contact endpoints
  updateContacts: {
    method: 'PUT',
    path: '/api/contacts/:id',
    responses: {
      200: ContactSchema,
    },
    body: ContactSchema.omit({ id: true }),
    summary: 'Update contact information',
  },

  getContacts: {
    method: 'GET',
    path: '/api/contacts/:id',
    responses: {
      200: ContactSchema.nullable(),
    },
    summary: 'Get contact information',
  },

  // Event endpoints
  createEvent: {
    method: 'POST',
    path: '/api/events',
    responses: {
      201: EventSchema,
    },
    body: EventSchema.omit({ id: true, createdAt: true }),
    summary: 'Create an event',
  },

  getEvents: {
    method: 'GET',
    path: '/api/events',
    responses: {
      200: z.array(EventSchema),
    },
    summary: 'Get all events',
  },
});
