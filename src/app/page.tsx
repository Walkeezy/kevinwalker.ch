import { Metadata } from 'next';
import NextLink from 'next/link';
import { karla } from './fonts';

export const metadata: Metadata = {
  title: 'Kevin Walker – Frontend engineer',
  description: 'Kevin Walker is a frontend engineer from Switzerland.',
};

const Link = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <NextLink
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="underline underline-offset-2 transition-opacity hover:opacity-70"
  >
    {children}
  </NextLink>
);

export default function Page() {
  return (
    <main
      className={`${karla.variable} background-purple animate-gradient bg-purple-gradient bg-[length:400%_400%] font-karla text-white`}
    >
      <div className="flex min-h-[100vh] items-center justify-center">
        <div className="space-y-4 py-20 text-center">
          <h1 className="text-4xl font-semibold md:text-6xl">Kevin Walker</h1>
          <p className="text-xl lg:text-2xl">
            Frontend engineer, working at <Link href="https://smartive.ch">smartive</Link>.
          </p>
          <p className="text-lg">
            <Link href="mailto:mail@kevinwalker.ch">mail@kevinwalker.ch</Link>
            <span className="mx-2">&middot;</span>
            <Link href="https://www.linkedin.com/in/kevin-walkeezy/">LinkedIn</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
