import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Benefits } from "@/components/sections/Benefits";
import { Differentials } from "@/components/sections/Differentials";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { ScrollToTop } from "@/components/sections/ScrolltoTop";
import { QualityEnergy } from "@/components/sections/QualityEnergy";
import { CoreServices } from "@/components/sections/CoreServices";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main>
        <ScrollToTop />
        <Hero />
        <Services />
        <QualityEnergy />
        <CoreServices />
        <Benefits />
        <Differentials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
