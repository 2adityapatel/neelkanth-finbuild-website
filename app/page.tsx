import HeroSection from "@/app/components/home/HeroSection";
import WhatWeOfferSection from "@/app/components/home/WhatWeOfferSection";
import HowItWorksSection from "@/app/components/home/HowItWorksSection";
import WhyNeelkanthSection from "@/app/components/home/WhyNeelkanthSection";
import AboutTeaserSection from "@/app/components/home/AboutTeaserSection";
import FAQSection from "@/app/components/home/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeOfferSection />
      <HowItWorksSection />
      <WhyNeelkanthSection />
      <AboutTeaserSection />
      <FAQSection />
    </>
  );
}
