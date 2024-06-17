import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { WagmiProvider } from "wagmi";
import "./globals.css";
import '@coinbase/onchainkit/styles.css';
import OnchainProviders from "@/components/OnchainProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OCK Playground",
  description: "OCK playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center">
        <OnchainProviders>{children}</OnchainProviders>
      </body>
    </html>
  );
}
