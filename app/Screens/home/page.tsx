import React from "react";
import FindPerfectJob from "../home/FindPerfectJob";
import HeroSection from "./hero_section";
import CompaniesSection from "./companies_section";
import ServicesSection from "./services";
import GettingStartedSection from "./getingStarted_section";
export default function HomePage() {
  return (
    <div>
      <HeroSection />
        <CompaniesSection />
      <ServicesSection />
        <GettingStartedSection />
      <FindPerfectJob />
      {/* Add more components here as needed */}
    </div>
  );
}
