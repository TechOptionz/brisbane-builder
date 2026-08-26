import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Marcellus } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/app-shell";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marcellus",
});

export const metadata: Metadata = {
  title: {
    default: "Brisbane Builder",
    template: "%s · Brisbane Builder",
  },
  description:
    "Construction management for Brisbane Builder Group — site execution, documents, commercial control, handover and AI intelligence.",
};

export const viewport: Viewport = {
  themeColor: "#0F2038",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${hanken.variable} ${marcellus.variable} font-sans`}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
