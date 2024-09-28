// import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Mayra Messer Hero Section',
    description: 'Expert Real Estate Guidance in Phoenix—Bilingual Support, Local Insight, and a Personal Touch to Every Journey', 
    keywords: 'Phoenix real estate, buy home in Phoenix, real estate guidance, bilingual real estate, local real estate insight',
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
