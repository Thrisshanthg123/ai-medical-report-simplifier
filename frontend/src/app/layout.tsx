import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "H2 — AI Medical Report Simplifier",
  description:
    "Understand your medical reports. Clearly. Upload medical reports and turn complex test results into simple, visual insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark h-full">
      <body className="bg-[#0a0f18] text-slate-100 min-h-screen flex flex-col antialiased selection:bg-teal-500/30 selection:text-teal-200">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
