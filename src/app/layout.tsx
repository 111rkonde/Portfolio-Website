import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yogesh Konde | Developer",
  description: "Portfolio website for Yogesh Konde, a specializing in Python , Java , SQL , and modern AI-Power technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ClientBody className={inter.className}>
        {children}
      </ClientBody>
    </html>
  );
}
