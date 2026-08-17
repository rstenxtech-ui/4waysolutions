import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import WaveDivider from "@/components/WaveDivider";
import SpecStrip from "@/components/SpecStrip";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Range from "@/components/Range";
import AMC from "@/components/AMC";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        <Hero />
        <WaveDivider />
        <SpecStrip />
        <Services />
        <Benefits />
        <Range />
        <AMC />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
