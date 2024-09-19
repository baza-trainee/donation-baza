import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic', 'latin-ext'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-montserrat',
});

export const fonts = {
  montserrat,
};
