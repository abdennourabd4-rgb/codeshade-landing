import Hero from "@/components/Hero";
import TargetAudience from "@/components/TargetAudience";
import Features from "@/components/Features";
import DashboardStats from "@/components/DashboardStats";
import Platforms from "@/components/Platforms";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";



export default function Home() {

  // JSON-LD Schema for Software Application
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Codeshade POS',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Windows, Android, Web',
    offers: {
      '@type': 'Offer',
      price: '9000',
      priceCurrency: 'DZD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '120',
    },
    description: 'Best POS software for Algerian retailers. Manage stock, sales, and customers easily.',
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TargetAudience />
      <Features />
      <DashboardStats />
      <Platforms />
      <Pricing />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
