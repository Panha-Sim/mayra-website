import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
// import "./styles/bootstrap-grid.rtl.min.css"
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

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
