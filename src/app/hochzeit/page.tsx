'use client';

import { Wimpel } from '@/components/wimpel';
import { redirect } from 'next/navigation';
import { barlow, lemonYellowSun } from '../fonts';

export default function HochzeitPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const password = event.currentTarget.querySelector('input')?.value;
    if (password && password === process.env.NEXT_PUBLIC_PASSWORD) {
      redirect(process.env.NEXT_PUBLIC_PHOTOALBUM_URL ?? '');
    } else if (password) {
      // eslint-disable-next-line no-alert
      alert('Das Passwort ist falsch. Bitte versuche es erneut.');
    }
  };

  return (
    <>
      <div
        className={`${barlow.variable} ${lemonYellowSun.variable} flex min-h-[100vh] items-center justify-center bg-gradient-to-br from-white to-teal font-barlow text-base`}
      >
        <div className="max-w-96 px-4">
          <p className="mb-8 text-center">
            Bitte gib nachfolgend das Passwort ein, welches du auf der Dankeskarte findest. Danach wirst du zu den Fotos
            weitergeleitet. 😉
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 md:flex-row">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Passwort"
              className="font-sans block w-full rounded border-2 border-teal bg-white p-3 text-base outline-none transition-colors focus:border-olive focus:ring-0 md:p-4"
              required
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded bg-orange px-6 py-3 font-handwritten text-base tracking-wider text-white transition-all hover:scale-105 hover:bg-yellow active:scale-95 md:py-4 md:text-lg"
            >
              Zu den Fotos
            </button>
          </form>
        </div>
      </div>
      <Wimpel className="fixed left-0 top-0 z-20 w-96 max-w-[50vw] rotate-[-15deg]" />
    </>
  );
}
