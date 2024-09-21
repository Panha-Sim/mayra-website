import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import "./styles/bootstrap-grid.rtl.min.css"

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
