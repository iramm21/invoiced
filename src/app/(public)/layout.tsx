import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/public/Navbar";
import Footer from "@/components/layout/public/Footer";

export const metadata: Metadata = {
  title: "Invoiced",
  description: "Invoicing App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
