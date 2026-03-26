import NRINavigation from "../../../components/nri/NRINavigation";
import NRICaseStudies from "../../../components/nri/NRICaseStudies";
import NRIProcess from "../../../components/nri/NRIProcess";
import NRICTA from "../../../components/nri/NRICTA";
import NRIFooter from "../../../components/nri/NRIFooter";

export const metadata = { title: "NRI Portfolio - Investo Grow" };

export default function NRIPortfolioPage() {
  return (
    <main>
      <NRINavigation />
      <div style={{ paddingTop: "120px" }} />
      <NRICaseStudies />
      <NRIProcess />
      <NRICTA />
      <NRIFooter />
    </main>
  );
}
