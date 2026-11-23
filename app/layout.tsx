import type { Metadata, Viewport } from "next";
import { Archivo, Readex_Pro } from "next/font/google";

import { contactLinks } from "@/content";

import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const readex = Readex_Pro({
  subsets: ["arabic", "latin"],
  variable: "--font-readex",
  display: "swap",
});

const title = "Abdulmalik Almasud | Finance & AI Transformation";
const description =
  "Abdulmalik Almasud works across accounting, SAP S/4HANA FI/CO and Oracle ERP support, full-stack development and applied AI, building practical, AI-enabled solutions for finance and business. Based in Riyadh.";

export const metadata: Metadata = {
  metadataBase: new URL(contactLinks.site),
  title,
  description,
  applicationName: "Abdulmalik Almasud",
  authors: [{ name: "Abdulmalik Almasud", url: contactLinks.site }],
  keywords: [
    "Abdulmalik Almasud",
    "عبدالملك المسعود",
    "Finance transformation",
    "SAP S/4HANA FI/CO",
    "Oracle ERP",
    "Full-stack developer",
    "Applied AI",
    "Riyadh",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Abdulmalik Almasud",
    title,
    description,
    locale: "en_US",
    alternateLocale: ["ar_SA"],
    firstName: "Abdulmalik",
    lastName: "Almasud",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdulmalik Almasud",
  alternateName: "عبدالملك المسعود",
  url: contactLinks.site,
  email: `mailto:${contactLinks.email}`,
  telephone: "+966538495575",
  jobTitle: "SAP FI/CO & Oracle Support",
  description,
  address: { "@type": "PostalAddress", addressLocality: "Riyadh", addressCountry: "SA" },
  worksFor: { "@type": "GovernmentOrganization", name: "Ministry of Municipalities and Housing" },
  founder: { "@type": "Organization", name: "Pioneers.dev" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Imam Mohammad Ibn Saud Islamic University" },
  knowsLanguage: ["ar", "en"],
  knowsAbout: [
    "Accounting",
    "SAP S/4HANA FI/CO",
    "Oracle ERP",
    "Finance transformation",
    "Full-stack web development",
    "Applied AI",
    "Large language model integration",
    "Intelligent automation",
  ],
  sameAs: [contactLinks.linkedin, contactLinks.github],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${archivo.variable} ${readex.variable}`} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
