import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import ClientProvider from "@/src/components/layout/ClientProvider";
import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Salsa",
  description: "An POS System",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Toaster position="top-center" richColors />
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
