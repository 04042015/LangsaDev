import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LangsaDev - Template Website Siap Pakai",
  description: "Jual template website modern dan profesional untuk berbagai kebutuhan bisnis. Responsive, SEO-friendly, dan mudah dikustomisasi.",
  keywords: "template website, website siap pakai, template responsive, website modern, LangsaDev",
  authors: [{ name: "LangsaDev" }],
  creator: "LangsaDev",
  openGraph: {
    title: "LangsaDev - Template Website Siap Pakai",
    description: "Jual template website modern dan profesional untuk berbagai kebutuhan bisnis.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
