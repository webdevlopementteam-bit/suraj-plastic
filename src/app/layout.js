import {
  Baloo_2,
  Urbanist,
  Lato,
  Montserrat,
} from "next/font/google";

import Script from "next/script";

import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import EnquiryPopup from "./components/EnquiryPopup";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo2",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});



export const metadata = {
  metadataBase: new URL("https://www.surajplasticindustries.in/"),

  title: "Stretch Blow Moulding Machine Manufacturer | Suraj Plastic",

  description:
    "Stretch Blow Moulding Machine Manufacturer in Delhi, India since 1997. Semi automatic, hand feed & fully automatic PET machines. 4000+ sold. Get a quote.",

  openGraph: {
    type: "website",
    siteName: "Suraj Plastic Industries",
    locale: "en_IN",
    images: ["/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
  },

  icons: {
    icon: "/favicons.png",
  },

  verification: {
    google: "7jBCIUmvtt2benPsKevtLs6s9qGatgh-U6jgJR4wkAE",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": "https://www.surajplasticindustries.in/#organization",
  name: "Suraj Plastic Industries",
  url: "https://www.surajplasticindustries.in",
  logo: "https://www.surajplasticindustries.in/logo.png",
  image: "https://www.surajplasticindustries.in/logo.png",
  foundingDate: "1982",
  telephone: "+91-9871494249",
  email: "info@surajplasticindustries.in",
  description:
    "Suraj Plastic Industries is a Stretch Blow Moulding Machine Manufacturer in New Delhi, India, manufacturing semi automatic, automatic hand feed and fully automatic PET preform stretch blow moulding machines since 1997.",
  knowsAbout: [
    "Stretch Blow Moulding Machine",
    "Semi Automatic Stretch Blow Moulding Machine",
    "Fully Automatic Stretch Blow Moulding Machine",
    "Automatic Hand Feed Blow Moulding Machine",
    "PET Preform Stretch Blow Moulding Machine",
    "PET Bottle Blow Machine",
    "Mineral Water Bottle Making Machine",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "D-18, Naresh Park Extension, Nangloi",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110041",
    addressCountry: "IN",
  },
  areaServed: ["IN", "Worldwide"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9871494249",
      contactType: "sales",
      email: "info@surajplasticindustries.in",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9999886068",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Suraj Plastic Industries",
  url: "https://www.surajplasticindustries.in",
  publisher: { "@id": "https://www.surajplasticindustries.in/#organization" },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${baloo2.variable} ${urbanist.variable} ${lato.variable} ${montserrat.variable}`}
    >
      <body className="font-lato overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-W96ZKH82SN"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-W96ZKH82SN');
          `}
        </Script>

        <Header />

        <main>{children}</main>

        <Footer />

        <EnquiryPopup />
      </body>
    </html>
  );
}