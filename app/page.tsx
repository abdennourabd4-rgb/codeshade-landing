import Hero from "@/components/Hero";
import TargetAudience from "@/components/TargetAudience";
import Features from "@/components/Features";
import DashboardStats from "@/components/DashboardStats";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <TargetAudience />
      <Features />
      <DashboardStats /> 
      <Pricing />
      <Footer />
    </main>
  );
}

