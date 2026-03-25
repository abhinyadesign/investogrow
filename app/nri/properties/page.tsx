import NRINavigation from "../../../components/nri/NRINavigation";
import NRIFooter from "../../../components/nri/NRIFooter";
import NRIPropertyCard from "../../../components/nri/NRIPropertyCard";
import { siteData } from "../../../lib/data";

export default function NRIPropertiesPage() {
  // Repeating dummyProperties to show a larger catalogue
  const allProperties = [...siteData.nri.properties, ...siteData.nri.properties];

  return (
    <main>
      <NRINavigation />
      <div style={{ paddingTop: "120px", paddingBottom: "4rem", backgroundColor: "var(--nri-bg)", color: "var(--nri-text)", minHeight: "100vh" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5%"}}>
           <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Premium <span className="gold-text">Properties</span></h1>
           <p style={{ color: "var(--nri-text-muted)", marginBottom: "4rem", maxWidth: "600px" }}>Explore our curated collection of luxury properties in Noida, specifically handpicked for our NRI clients ensuring maximum ROI and security.</p>
           
           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "2.5rem" }}>
             {allProperties.map((prop, idx) => (
                <NRIPropertyCard key={idx} {...prop} />
             ))}
           </div>
        </div>
      </div>
      <NRIFooter />
    </main>
  );
}
