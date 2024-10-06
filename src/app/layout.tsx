// import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expert Real Estate Guidance in Phoenix & Goodyear | Mayra Messer',
  description: 'Expert Real Estate Guidance in Phoenix and Goodyear—Bilingual Support, Home Buying and Selling, with Local Insight and a Personal Touch in Every Real Estate Journey.',
  keywords: 'Phoenix real estate, Goodyear real estate, home buying Phoenix, home buying Goodyear, bilingual real estate agent, local Phoenix real estate guidance, local Goodyear real estate guidance',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
