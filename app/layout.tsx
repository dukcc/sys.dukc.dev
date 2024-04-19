import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import "material-symbols";
import Link from "next/link";
import FileBrowser from "@/components/FileBrowser";
import TitleBar from "@/components/TitleBar";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "sys.dukc.dev",
  description: "A system file manager version of dukc.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceMono.className}>
      <body className="p-12 bg-black text-white overflow-hidden h-screen w-screen">
        <section className="border border-white w-full h-full min-h-0">
          <TitleBar />
          <div className="flex min-h-0 h-full w-full">
            <FileBrowser />
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
