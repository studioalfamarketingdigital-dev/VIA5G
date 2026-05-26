import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { Plans } from "@/components/site/Plans";
import { AppSection } from "@/components/site/AppSection";
import { Intelligence } from "@/components/site/Intelligence";
import { Coverage } from "@/components/site/Coverage";
import { Business } from "@/components/site/Business";
import { Difference } from "@/components/site/Difference";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { ChatWidget } from "@/components/site/ChatWidget";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VIA — A nova geração das operadoras" },
      {
        name: "description",
        content:
          "Operadora digital brasileira com 5G nacional, app inteligente e experiência 100% digital. Conectividade premium para a nova geração.",
      },
      { property: "og:title", content: "VIA — A nova geração das operadoras" },
      {
        property: "og:description",
        content: "5G nacional, app inteligente e ativação digital. Conheça a VIA.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-foreground">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Plans />
        <AppSection />
        <Intelligence />
        <Coverage />
        <Business />
        <Difference />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
