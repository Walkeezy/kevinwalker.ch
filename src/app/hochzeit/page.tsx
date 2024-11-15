'use client';

import { Wimpel } from '@/components/wimpel';
import { redirect } from 'next/navigation';
import { barlow, lemonYellowSun } from '../fonts';

export default function HochzeitPage() {
  // check if password is correct, if so redirect to external url
  const checkPassword = (password: string) => {
    if (password === 'password') {
      redirect('https://www.google.com');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const password = event.currentTarget.querySelector('input')?.value;
    if (password) {
      checkPassword(password);
    }
  };

  return (
    <>
      <div
        className={`${barlow.variable} ${lemonYellowSun.variable} flex min-h-[100vh] items-center justify-center bg-gradient-to-br from-white to-teal font-barlow text-sm lg:text-base`}
      >
        <div className="max-w-96">
          <p className="mb-8 text-center">
            Bitte gib nachfolgend das Passwort ein, welches du auf der Dankeskarte findest. Danach wirst du zu den Fotos
            weitergeleitet. 😉
          </p>
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Passwort"
              className="font-sans block w-full rounded border-2 border-teal bg-white p-3 text-sm outline-none transition-colors focus:border-olive focus:ring-0 md:p-4 lg:text-base"
              required
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded bg-orange px-6 py-4 font-handwritten text-base tracking-wider text-white transition-all hover:scale-105 hover:bg-yellow active:scale-95 disabled:bg-opacity-50 md:text-lg"
            >
              Zu den Fotos
            </button>
          </form>
        </div>
      </div>
      <Wimpel className="fixed -top-14 left-0 z-20 w-96 max-w-[25vw] rotate-[-25deg]" />
    </>
  );
}
