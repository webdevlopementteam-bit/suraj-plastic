import AboutHero from "../components/about/AboutHero";
import CompanyOverview from "../components/about/CompanyOverview";
import ContactInfo from "../components/about/ContactInfo";
import InnovativeSolutions from "../components/about/InnovativeSolutions";
import SEOContent from "../components/about/SEOContent";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Certified from "../components/Certified";


export const metadata = {
  title: "About Us | Suraj Plastic Industries – Since 1982",
  description:
    "Founded in 1982, Suraj Plastic Industries has built PET stretch blow moulding machines since 1997. ISO 9001:2015 certified, 4000+ machines sold in 12+ countries.",
  keywords: ["About Suraj Plastic Industries", "Stretch Blow Moulding Machine Manufacturer", "Blow Moulding Machine Manufacturer and supplier"],
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
    <AboutHero/>
    <CompanyOverview/>
    <Certified/>
    <WhyChooseUs/>
    <InnovativeSolutions/>
    <SEOContent/>
    <ContactInfo/>
    </>
  );
}
