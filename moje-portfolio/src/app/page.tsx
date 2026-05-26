import Background from "@/components/Background";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Passions from "@/components/Passions";
import Offer from "@/components/Offer";
import Work from "@/components/Work";
import Brands from "@/components/Brands";
import Ekosystem from "@/components/Ekosystem";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <Cursor />
      <Navbar />
      <ScrollProgress />
      <main className="relative z-10">
        <Hero />
        <About />
        <Passions />
        <Offer />
        <Work />
        <Brands />
        <Ekosystem />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
