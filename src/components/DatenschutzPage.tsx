import { LegalPage } from "@/components/LegalPage";
import { PrivacyPolicyContent } from "@/components/PrivacyPolicyContent";

export function DatenschutzPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Datenschutz"
      lede="Informationen darüber, welche personenbezogenen Daten bei der Nutzung dieser Website verarbeitet werden."
      sections={[
        {
          heading: "Datenschutzerklärung",
          body: <PrivacyPolicyContent />,
        },
      ]}
    />
  );
}
