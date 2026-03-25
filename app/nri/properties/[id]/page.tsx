import NRINavigation from "../../../../components/nri/NRINavigation";
import NRIFooter from "../../../../components/nri/NRIFooter";
import NRIPropertyDetails from "../../../../components/nri/NRIPropertyDetails";

// Note: In Next.js App Router 15+, dynamic route params are available as a Promise.
export default async function NRIPropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return (
    <main>
      <NRINavigation />
      <NRIPropertyDetails id={resolvedParams.id} />
      <NRIFooter />
    </main>
  );
}
