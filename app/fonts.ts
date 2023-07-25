import { Ubuntu_Mono, Source_Code_Pro } from 'next/font/google';

export const fontMain = Ubuntu_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: false,
});
export const fontSecondary = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  preload: false,
});
