import { Hero } from "@/components/home/Hero";
import { LayerShowcase } from "@/components/home/LayerShowcase";
import { Features } from "@/components/home/Features";
import { UseCases } from "@/components/home/UseCases";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { ConfiguratorTeaser } from "@/components/home/ConfiguratorTeaser";
import { Quality } from "@/components/home/Quality";
import { CompanyTeaser } from "@/components/home/CompanyTeaser";
import { ServiceTeaser } from "@/components/home/ServiceTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <LayerShowcase />
      <Features />
      <UseCases />
      <BeforeAfter />
      <ConfiguratorTeaser />
      <Quality />
      <CompanyTeaser />
      <ServiceTeaser />
    </>
  );
}
