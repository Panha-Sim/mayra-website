// import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bilingual Real Estate Expert in Phoenix, Goodyear, Laveen, Peoria, Avondale, Tolleson | Mayra Messer',
  description: 'Discover expert real estate services with Mayra Messer in Phoenix, Goodyear, Laveen, Peoria, Avondale, and Tolleson. Bilingual support for home buying and selling, providing local insights and a personalized touch in every real estate transaction.',
  keywords: 'Phoenix real estate, Goodyear real estate, Laveen real estate, Peoria real estate, Avondale real estate, Tolleson real estate, home buying Phoenix, home buying Goodyear, bilingual real estate agent, Phoenix home selling, Goodyear home selling, local real estate guidance, Mayra Messer real estate',
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
