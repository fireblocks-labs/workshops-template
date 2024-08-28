import { generalConfig, mainPageConfig } from "@/config";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "./components/Layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${mainPageConfig.subTitle}`,
  icons: {
    icon: "https://openmoji.org/data/color/svg/1F4D6.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          backgroundColor: "#fffefe",
          backgroundImage: `url(${generalConfig.basePath}/images/background.svg)`,
          backgroundRepeat: "repeat",
          backgroundSize: "20px 20px",
          backgroundPosition: "top left",
          backgroundAttachment: "fixed",
          minHeight: "100vh"
        }}
      >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
