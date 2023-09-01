import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "@/providers/ReduxProvider";
import ToasterProvider from "@/providers/ToastProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <ReduxProvider>
            <ToasterProvider />
            <div className="flex min-h-screen flex-col  ">
              <Navbar />
              {children}
              <Footer />
            </div>
          </ReduxProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
