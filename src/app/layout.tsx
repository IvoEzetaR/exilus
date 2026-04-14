import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import TopBar from "@/components/layout/TopBar";
import { CLIENT } from "@/lib/client-data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://exilus.pe";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${CLIENT.fullName} | Dr. Víctor Salazar — Trujillo`,
    template: `%s | ${CLIENT.fullName}`,
  },
  description:
    "Cirugía bariátrica y laparoscópica avanzada en Trujillo, Perú. Dr. Víctor Salazar — 16 años de experiencia, pionero en el norte del Perú. Agenda tu evaluación.",
  keywords: [
    "cirugía bariátrica trujillo",
    "manga gástrica trujillo",
    "bypass gástrico trujillo",
    "cirugía laparoscópica trujillo",
    "obesidad tratamiento trujillo",
    "dr victor salazar trujillo",
    "exilus cirugía bariátrica",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    siteName: CLIENT.fullName,
    title: `${CLIENT.fullName} | Trujillo, Perú`,
    description:
      "Cirugía bariátrica y laparoscópica avanzada con el Dr. Víctor Salazar — pionero en el norte del Perú. Agenda tu evaluación hoy.",
  },
};

// Schema JSON-LD médico
const medicalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${siteUrl}/#organization`,
      name: CLIENT.fullName,
      url: siteUrl,
      telephone: CLIENT.phone,
      email: CLIENT.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle Los Laureles 436, Of. 403, Urb. California",
        addressLocality: "Trujillo",
        addressRegion: "La Libertad",
        addressCountry: "PE",
      },
      medicalSpecialty: "Surgery",
      description:
        "Centro especializado en cirugía bariátrica y laparoscópica avanzada en Trujillo, Perú.",
      sameAs: [
        CLIENT.social.instagram,
        CLIENT.social.facebook,
        CLIENT.social.tiktok,
      ],
    },
    {
      "@type": "Physician",
      "@id": `${siteUrl}/#physician`,
      name: CLIENT.doctor,
      jobTitle: CLIENT.doctorRole,
      worksFor: { "@id": `${siteUrl}/#organization` },
      medicalSpecialty: "Surgery",
      description:
        "Cirujano Bariatra y Laparoscopista con 16 años de experiencia en cirugía abdominal y 10 en cirugía bariátrica. Director del Hospital Regional Docente de Trujillo.",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
        />
      </head>
      <body className={inter.className}>
        <TopBar />
        {children}
        <WhatsAppButton phoneNumber={CLIENT.phone} />
      </body>
    </html>
  );
}
