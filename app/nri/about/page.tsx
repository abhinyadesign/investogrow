import NRINavigation from "../../../components/nri/NRINavigation";
import NRIFooter from "../../../components/nri/NRIFooter";
import NRIAbout from "../../../components/nri/NRIAbout";
import { siteData } from "../../../lib/data";

export default function NRIAboutPage() {
  return (
    <main>
      <NRINavigation solid />
      <div style={{ paddingTop: "80px" }}>
        <NRIAbout data={siteData.nri.about} />
      </div>
      <NRIFooter />
    </main>
  );
}
