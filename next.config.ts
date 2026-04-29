import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      // /servicios ya no es una página: redirige a la sección del home
      {
        source: "/servicios",
        destination: "/#servicios",
        permanent: true,
      },
      // Slugs antiguos → nuevas categorías (preserva SEO de URLs viejas)
      {
        source: "/servicios/manga-gastrica",
        destination: "/servicios/cirugia-bariatrica#manga-gastrica",
        permanent: true,
      },
      {
        source: "/servicios/bypass-gastrico",
        destination: "/servicios/cirugia-bariatrica#bypass-gastrico",
        permanent: true,
      },
      {
        source: "/servicios/cirugia-revisional",
        destination: "/servicios/cirugia-bariatrica#cirugia-revisional",
        permanent: true,
      },
      {
        source: "/servicios/balon-intragastrico",
        destination: "/servicios/manejo-obesidad#balon-intragastrico",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
