import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fireblocks Workshop",
  icons: {
    icon: "https://www.fireblocks.com/wp-content/uploads/2020/10/cropped-FAVICON-2-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ fontFamily: "'Inter', Helvetica, sans-serif" }}>{children}</body>
    </html>
  );
}
