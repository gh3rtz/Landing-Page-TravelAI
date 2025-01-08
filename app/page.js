import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Integration from "@/components/Integration";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Integration />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
