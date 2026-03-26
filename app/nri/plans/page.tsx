import NRINavigation from "../../../components/nri/NRINavigation";
import NRIPricing from "../../../components/nri/NRIPricing";
import NRIFAQAccordion from "../../../components/nri/NRIFAQAccordion";
import NRICTA from "../../../components/nri/NRICTA";
import NRIFooter from "../../../components/nri/NRIFooter";

export const metadata = { title: "NRI Investment Plans - Investo Grow" };

export default function NRIPlansPage() {
  return (
    <main>
      <NRINavigation />
      <div style={{ paddingTop: "120px" }} />
      <NRIPricing />
      <NRIFAQAccordion />
      <NRICTA />
      <NRIFooter />
    </main>
  );
}
