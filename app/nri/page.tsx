import NRINavigation from "../../components/nri/NRINavigation";
import NRIHero from "../../components/nri/NRIHero";
import NRIAbout from "../../components/nri/NRIAbout";
import NRIProperties from "../../components/nri/NRIProperties";
import NRIFooter from "../../components/nri/NRIFooter";
import { siteData } from "../../lib/data";

export default function NRIPage() {
  return (
    <main>
      <NRINavigation />
      <NRIHero data={siteData.nri.hero} />
      <NRIAbout data={siteData.nri.about} />
      <NRIProperties data={siteData.nri.properties} />
      <NRIFooter />
    </main>
  );
}
