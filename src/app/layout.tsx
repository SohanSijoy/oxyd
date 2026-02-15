import type { Metadata } from 'next';
import { Oswald, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/smooth-scroll';
import Cursor from '@/components/ui/cursor';

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  style: ['italic'],
});

export const metadata: Metadata = {
  title: 'OXYD | ELITE PERFORMANCE LAB',
  description: 'The city’s only hyper-performance facility for the 1%.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${inter.variable} ${playfair.variable} antialiased selection:bg-burnished-bronze selection:text-carbon-black`}
      >
        <SmoothScroll>
          <Cursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
