import { ReactNode } from 'react';
import '../styles/globals.css';
import { karla } from './fonts';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${karla.variable} background-[#362760] animate-gradient bg-purple-gradient bg-[length:400%_400%] text-white`}
    >
      <body className="flex min-h-[100vh] items-center justify-center">{children} </body>
    </html>
  );
}
