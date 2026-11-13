import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Benefits } from "@/components/site/Benefits";
import { Plans } from "@/components/site/Plans";
import { Business } from "@/components/site/Business";
import { Difference } from "@/components/site/Difference";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VIA — Conectividade em uma nova direção" },
      {
        name: "description",
        content:
          "A VIA está construindo uma experiência mais simples e transparente em conectividade móvel. Conheça a proposta e acompanhe o lançamento.",
      },
      { property: "og:title", content: "VIA — Conectividade em uma nova direção" },
      {
        property: "og:description",
        content: "Uma nova experiência em conectividade móvel está a caminho.",
      },
      { name: "theme-color", content: "#07111f" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-[#07111f] text-foreground">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Plans />
        <Business />
        <Difference />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
