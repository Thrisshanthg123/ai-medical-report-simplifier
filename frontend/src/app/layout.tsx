import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { AuthProvider } from "@/context/AuthContext";

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
    <html lang="en" className="light h-full">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col antialiased selection:bg-teal-500/20 selection:text-teal-800">
        <AuthProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
