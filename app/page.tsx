import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PropertyCard, { Property } from "@/components/PropertyCard";
import Services from "@/components/Services";
import About from "@/components/About";
import Agents from "@/components/Agents";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { siteData } from "@/lib/data";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--background-secondary)", minHeight: "100vh", }}>
      <Navigation />
      <Hero data={siteData.main.hero} />
      
      <section id="properties" style={{ padding: "120px 8%", maxWidth: "1600px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "var(--font-geist-sans)", fontSize: 48, fontWeight: 700, marginBottom: 48, textAlign: "left", letterSpacing: "-1px" }}>
          {siteData.main.mainProperties.title}
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
          gap: "32px"
        }}>
          {siteData.main.mainProperties.items.map((prop, idx) => (
            <PropertyCard key={prop.id} property={prop} index={idx} />
          ))}
        </div>
      </section>

      <Services data={siteData.main.services} />
      <About data={siteData.main.about} />
      <Agents data={siteData.main.agents} />
      <Testimonials data={siteData.main.testimonials} />
      <FAQ data={siteData.main.faq} />
      <Contact data={siteData.main.contact} />
      <Footer />
    </main>
  );
}
