import "./nri-theme.css";

export const metadata = {
  title: "Investo Grow - NRI Exclusive",
  description: "Premium investment opportunities tailored for Non-Resident Indians.",
};

export default function NRILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="nri-theme">
      {children}
    </div>
  );
}
