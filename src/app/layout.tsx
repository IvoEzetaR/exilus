import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CandidateFloatButton from "@/components/ui/CandidateFloatButton";
import TopBar from "@/components/layout/TopBar";
import { CLIENT } from "@/lib/client-data";

const GA_MEASUREMENT_ID = "G-6B167Z5VEY";

// ─── Tipografía ────────────────────────────────────────────────────────────
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: "variable",       // variable font — activa opsz y wdth
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

// ─── Metadata ─────────────────────────────────────────────────────────────
const siteUrl = "https://exilus.pe";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Exilus | Cirugía Bariátrica Trujillo — Dr. Augusto Salazar",
    template: "%s | Exilus Cirugía Bariátrica",
  },
  description:
    "Cirugía bariátrica laparoscópica en Trujillo. Dr. Augusto Salazar — FACS, +16 años, Director HRDT. Agenda tu evaluación.",
  keywords: [
    "cirugía bariátrica trujillo",
    "manga gástrica trujillo",
    "bypass gástrico trujillo",
    "cirugía laparoscópica trujillo",
    "obesidad tratamiento trujillo",
    "dr augusto salazar trujillo",
    "exilus cirugía bariátrica",
    "cirujano bariatra norte peru",
    "cirugía bariátrica la libertad",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteUrl,
    siteName: CLIENT.fullName,
    title: "Exilus — Cirugía Bariátrica en Trujillo | Dr. Augusto Salazar",
    description:
      "16 años de experiencia. Pionero en cirugía bariátrica en el norte del Perú. Manga gástrica, bypass y más — con acompañamiento integral.",
    images: [
      {
        url: "/images/doctor-terno.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Víctor Augusto Salazar Tantaleán — Cirujano Bariatra, Trujillo Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exilus — Cirugía Bariátrica en Trujillo",
    description:
      "16 años de experiencia en cirugía abdominal. Pionero bariátrico en el norte del Perú.",
    images: ["/images/doctor-terno.jpg"],
  },
};

// ─── JSON-LD Schema ────────────────────────────────────────────────────────
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
        postalCode: "13001",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-8.1116",
        longitude: "-79.0287",
      },
      medicalSpecialty: [
        "http://schema.org/BariatricSurgery",
        "http://schema.org/SurgicalProcedure",
      ],
      description:
        "Centro especializado en cirugía bariátrica y laparoscópica avanzada en Trujillo, Perú. Pioneros en el norte del país.",
      areaServed: {
        "@type": "City",
        name: "Trujillo",
        containedInPlace: {
          "@type": "State",
          name: "La Libertad",
          containedInPlace: { "@type": "Country", name: "Perú" },
        },
      },
      sameAs: [
        CLIENT.social.instagram,
        CLIENT.social.facebook,
        CLIENT.social.tiktok,
      ],
    },
    {
      "@type": ["Physician", "Person"],
      "@id": `${siteUrl}/#physician`,
      name: CLIENT.doctor,
      jobTitle: "Cirujano Bariatra y Laparoscopista",
      description:
        "Cirujano Bariatra y Laparoscopista con más de 16 años de experiencia en cirugía abdominal y 10 años en cirugía bariátrica. Director del Hospital Regional Docente de Trujillo y Director Médico de Exilus. Pionero en cirugía bariátrica en el norte del Perú.",
      worksFor: [
        { "@id": `${siteUrl}/#organization` },
        {
          "@type": "Hospital",
          name: "Hospital Regional Docente de Trujillo",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Trujillo",
            addressCountry: "PE",
          },
        },
      ],
      medicalSpecialty: "http://schema.org/BariatricSurgery",
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: "Cirujano Bariatra y Laparoscopista" },
      ],
      // Membresías internacionales — sigla y nombre tal como figuran en AuthorityDeep
      memberOf: [
        {
          "@type": "Organization",
          name: "Fellow of the American College of Surgeons (FACS)",
        },
        {
          "@type": "Organization",
          name: "American Society for Metabolic & Bariatric Surgery (ASMBS)",
        },
        {
          "@type": "Organization",
          name: "International Federation for the Surgery of Obesity (IFSO)",
        },
        {
          "@type": "Organization",
          name: "Society of American Gastrointestinal and Endoscopic Surgeons (SAGES)",
        },
        {
          "@type": "Organization",
          name: "Advanced Trauma Life Support — American College of Surgeons (ATLS)",
        },
        {
          "@type": "Organization",
          name: "Asociación Peruana de Cirugía Bariátrica y Enfermedades Metabólicas (APCBEM)",
        },
      ],
      knowsAbout: [
        "Cirugía bariátrica",
        "Manga gástrica",
        "Bypass gástrico",
        "Cirugía laparoscópica",
        "Cirugía digestiva",
        "Manejo de obesidad",
      ],
    },
    // ── FAQPage — marca las 5 preguntas frecuentes de la home (componente FAQ) ──
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Soy candidato para cirugía bariátrica?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Generalmente, son candidatos los pacientes con IMC ≥ 30 con comorbilidades o IMC ≥ 35 con o sin enfermedades asociadas. Sin embargo, cada caso se evalúa de forma personalizada en consulta con el Dr. Salazar para determinar la mejor alternativa según tu situación médica e historia clínica.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto peso se pierde después de la cirugía?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los resultados varían según el procedimiento realizado y el compromiso del paciente con el seguimiento multidisciplinario. La evidencia de la ASMBS muestra una reducción significativa del exceso de peso, pero cada caso es individual. El acompañamiento integral — nutrición, psicología y control médico — es clave para sostener los resultados a largo plazo.",
          },
        },
        {
          "@type": "Question",
          name: "¿La cirugía es riesgosa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La cirugía bariátrica es un procedimiento con respaldo médico cuando es realizado por un equipo especializado y en un centro acreditado. En Exilus utilizamos técnicas laparoscópicas avanzadas que ayudan a reducir los riesgos quirúrgicos y favorecen la recuperación postoperatoria. Toda intervención conlleva riesgos que se evalúan en la consulta.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué seguimiento se realiza después de la cirugía?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El tratamiento incluye un seguimiento multidisciplinario continuo con cirugía, nutrición, psicología y control médico. El proceso no termina en el quirófano — el acompañamiento postoperatorio es parte integral de nuestro método y es fundamental para sostener los resultados.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cuánto cuesta la cirugía?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El costo varía según cada caso clínico y se define en la evaluación. La inversión incluye la evaluación integral preoperatoria, el procedimiento y el seguimiento. Contáctanos para una evaluación personalizada donde podremos orientarte sobre las opciones que mejor se adaptan a tu situación.",
          },
        },
      ],
    },
  ],
};

// ─── Root Layout ───────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-PE" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
        />
      </head>
      <body className="font-sans bg-cream text-warm-text antialiased">
        <TopBar />
        {children}
        <CandidateFloatButton />
        <WhatsAppButton phoneNumber={CLIENT.phone} />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
