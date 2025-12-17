import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  subsets: ['arabic'],
  variable: '--font-tajawal',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Faouzi Touch - فوزي تاتش | عطور فاخرة",
  description: "متجر فوزي تاتش للعطور الفاخرة - توصيل لكافة مناطق تونس",
  keywords: "عطور، فوزي تاتش، تونس، عطور فاخرة، parfum tunisie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.variable} font-arabic antialiased`}>
        {children}
      </body>
    </html>
  );
}
