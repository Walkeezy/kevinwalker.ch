import { Barlow, Karla } from 'next/font/google';
import localFont from 'next/font/local';

export const karla = Karla({
  variable: '--karla-font',
  subsets: ['latin'],
  display: 'swap',
});

export const barlow = Barlow({
  variable: '--barlow-font',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const lemonYellowSun = localFont({
  display: 'swap',
  variable: '--lemon-yellow-sun-font',
  src: [
    {
      path: '../fonts/lemon-yellow-sun.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});
