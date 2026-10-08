import type { Metadata } from "next";
import "./globals.css";

// Ovdje je postavljena staging domena, a kad kupite domenu (npr. hecicstil.ba) samo zamijeniš ovaj URL
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hecic-stil.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hećić Stil Enterijeri | Kuhinje i Namještaj po Mjeri Gradačac",
    template: "%s | Hećić Stil Enterijeri",
  },
  description:
    "Projektiranje, precizna izrada i montaža vrhunskih kuhinja po mjeri, ugradbenih ormara i trpezarijskih stolova u Gradačcu i širom BiH. Besplatna izmjera i 3D vizualizacija.",
  keywords: [
    "kuhinje po mjeri",
    "stolarija hecic",
    "hecic stil enterijeri",
    "ugradbeni ormari",
    "stolovi po mjeri",
    "kuhinje gradacac",
    "namjestaj po mjeri bih",
    "montaza kuhinja",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Hećić Stil Enterijeri | Vrhunski Namještaj po Mjeri",
    description:
      "Stil koji definira prostor. Precizna izrada kuhinja po mjeri, ugradbenih garderobera i stolova od masiva.",
    url: siteUrl,
    siteName: "Hećić Stil Enterijeri",
    locale: "bs_BA",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Hećić Stil Enterijeri Gradačac",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hećić Stil Enterijeri",
    description: "Kuhinje i namještaj po mjeri s potpisom preciznosti.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org strukturirani podaci za lokalni stolarski i enterijerski biznis
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Hećić Stil Enterijeri",
    image: `${siteUrl}/logo.png`,
    url: siteUrl,
    telephone: "+38761886715",
    email: "hecicstil@gmail.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "25. Novembra br. 20",
      addressLocality: "Gradačac",
      postalCode: "76250",
      addressCountry: "BA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.8786,
      longitude: 18.4286,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/stolarijahecic",
      "https://www.instagram.com/stolarijahecic/",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Izrada kuhinja po mjeri",
          description: "Projektovanje, 3D izmjera i ugradnja kuhinja po mjeri od medijapana i Fenix materijala.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Izrada ugradbenih ormara",
          description: "Klizni i standardni ormari do stropa sa skrivenom LED rasvjetom.",
        },
      },
    ],
  };

  return (
    <html lang="bs" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#0d0e12] text-gray-100" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}