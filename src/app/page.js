import Hero from "./components/Hero";
import Industry from "./components/Industry";
import FeaturedMachines from "./components/FeaturedMachines";
import Certified from "./components/Certified";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Bannerinfo from "./components/Bannerinfo";
import Faq from "./components/Faq";
import HomeSeoContent from "./components/HomeSeoContent";

export const metadata = {
  title: "Stretch Blow Moulding Machine Manufacturer | Suraj Plastic",

  description:
    "Stretch Blow Moulding Machine Manufacturer in Delhi, India since 1997. Semi automatic, hand feed & fully automatic PET machines. 4000+ sold. Get a quote.",

  keywords: [
    "Stretch Blow Moulding Machine Manufacturer",
    "Stretch Blow Moulding Machine Manufacturer in India",
    "Stretch Blow Moulding Machine Manufacturer in Delhi",
    "PET Stretch Blow Moulding Machine",
    "Suraj Plastic Industries",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: "Suraj Plastic Industries",
    locale: "en_IN",
    images: ["/logo.png"],
    url: "/",
    title: "Stretch Blow Moulding Machine Manufacturer | Suraj Plastic",
    description:
      "Semi automatic, automatic hand feed and fully automatic PET stretch blow moulding machines since 1997.",
  },
};

export default function Home() {
  return (
   <>
    <Hero/>
    <Industry/>
    <FeaturedMachines/>
    <Certified/>
    <Bannerinfo/>
    <Services/>
    <Reviews/>
    <HomeSeoContent/>
    <Faq/>
   </>
  );
}
