import type { Metadata } from "next";
import { Manrope, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const arabicFont = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://codeshade.app'),
  title: {
    default: "Codeshade POS | أفضل برنامج تسيير المحلات في الجزائر",
    template: "%s | Codeshade"
  },
  description: "Le meilleur logiciel de gestion en Algérie. Logiciel de gestion de stock et caisse (POS) pour les magasins en Algérie. برنامج تسيير المحلات التجارية.",
  keywords: [
    "Le meilleur logiciel de gestion en Algérie",
    "Logiciel de gestion Algérie",
    "POS System Algeria",
    "برنامج تسيير المحلات",
    "Logiciel Caisse",
    "Gestion de stock",
    "Codeshade",
    "سوبرات",
    "كوسميتيك"
  ],
  authors: [{ name: "Codeshade Team" }],
  creator: "Codeshade",
  publisher: "Codeshade Inc",
  openGraph: {
    title: "Codeshade POS | تحكم في تجارتك بسهولة",
    description: "البرنامج رقم 1 في الجزائر لتسيير نقاط البيع. جرب النسخة المجانية اليوم!",
    url: 'https://codeshade.app',
    siteName: 'Codeshade',
    images: [
      {
        url: '/assets/heroimage.png',
        width: 1200,
        height: 630,
        alt: 'Codeshade Dashboard Preview',
      },
    ],
    locale: 'ar_DZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Codeshade POS - Logiciel de Gestion",
    description: "Gérez votre stock et vos ventes facilement.",
    images: ['/assets/heroimage.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'YOUR_VERIFICATION_CODE',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="ltr" className="scroll-smooth scroll-pt-[100px]" suppressHydrationWarning>
      <body className={`${manrope.variable} ${arabicFont.variable} font-sans antialiased bg-white text-gray-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}