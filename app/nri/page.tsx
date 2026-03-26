import NRINavigation from "../../components/nri/NRINavigation";
import NRIHero from "../../components/nri/NRIHero";
import NRIMarquee from "../../components/nri/NRIMarquee";
import NRIStats from "../../components/nri/NRIStats";
import NRIProcess from "../../components/nri/NRIProcess";
import NRIAbout from "../../components/nri/NRIAbout";
import NRICaseStudies from "../../components/nri/NRICaseStudies";
import NRIProperties from "../../components/nri/NRIProperties";
import NRIPricing from "../../components/nri/NRIPricing";
import NRIFAQAccordion from "../../components/nri/NRIFAQAccordion";
import NRICTA from "../../components/nri/NRICTA";
import NRIFooter from "../../components/nri/NRIFooter";
import { siteData } from "../../lib/data";

export default function NRIPage() {
  return (
    <main>
      <NRINavigation solid />
      <NRIHero data={siteData.nri.hero} />
      <NRIStats />
      <NRIMarquee />
      <NRIProcess />
      <NRIAbout data={siteData.nri.about} />
      <NRICaseStudies />
      <NRIProperties data={siteData.nri.properties} />
      <NRIPricing />
      <NRIFAQAccordion />
      <NRICTA />
      <NRIFooter />
    </main>
  );
}
