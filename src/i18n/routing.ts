import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ua', 'en', 'pl'],
  defaultLocale: 'ua',
});

// Lightweight wrappers around Next.js' navigation APIs
// That will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
