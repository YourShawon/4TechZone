import FeaturesSection from "@/components/features-section";
import Integration from "@/components/Integration";
import Hero from "@/components/hero";
import SocialToggle from "@/components/ToggleBar";

export default function MarketingPage() {
  return (
    <div>
      <Hero/>
      <FeaturesSection/>
      <Integration/>
      <SocialToggle/>
    </div>
  );
}
