import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Integration from "@/components/Integration";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Integration />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
