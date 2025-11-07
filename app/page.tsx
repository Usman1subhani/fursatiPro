// app/page.tsx
import HeroSection from "./Screens/home/hero_section";
import CompaniesSection from "./Screens/home/companies_section";
import ServicesSection from "./Screens/home/services";
import GettingStartedSection from "./Screens/home/getingStarted_section";
import HiredByTopCompanies from "./Screens/home/hiredByTopCompanies";
import Testimonials from "./Screens/home/testimonials";
import FindJobsCardSection from "./Screens/home/findJobCard";
import PerfectJobForYou from "./Screens/home/perfectJobForYou";
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CompaniesSection />
      <ServicesSection />
      <GettingStartedSection />
      <HiredByTopCompanies />
      <PerfectJobForYou />
      <Testimonials />
      <FindJobsCardSection />
    </>
  );
}
