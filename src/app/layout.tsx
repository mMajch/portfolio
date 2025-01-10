import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pierre Marais",
  description: "Pierre Marais CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
          <title>Marek Majchrzak</title>
          <meta name='description' content="Marek Majchrzak portfolio" />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/IMG_1401.jpg' />
      </Head>
      <body className={`${inter.className}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
