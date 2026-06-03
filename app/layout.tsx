import type { Metadata } from "next";

import { Providers } from "@/components/Providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Abdulmalik Almasud | Portfolio",
  description:
    "Abdulmalik Almasud - Accountant, Full-Stack Developer, and SAP Consultant. Bridging finance and technology to streamline processes and build automation solutions.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
