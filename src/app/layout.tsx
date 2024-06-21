import type { Metadata } from "next";
import { Lato, Oswald, Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-roboto',
})

const oswald = Oswald ({
  subsets: ['latin'],
  weight: '500',
  display: 'swap',
  variable: '--font-oswald',
})

const lato = Lato ({
  subsets: ['latin'],
  weight: '700',
  display: 'swap',
  variable: '--lato-oswald',
})

export const metadata: Metadata = {
  title: "Komorebi Gin",
  description: "Created by Luciano Brégoli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white ${lato.className}`}>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  );
}

