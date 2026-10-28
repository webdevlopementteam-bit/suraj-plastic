import Link from "next/link";
import { FaChevronRight, FaHouse } from "react-icons/fa6";
import SeoRenderer from "../components/product/SeoRenderer";

const content = [
  {
    type: "h2",
    text: "Spare Parts and Service for Stretch Blow Moulding Machines",
  },
  {
    type: "paragraph",
    content: [
      { text: "Suraj Plastic Industries supports every machine we build with genuine spare parts, installation, maintenance and technical service. Whether you run a " },
      { text: "semi automatic stretch blow moulding machine", bold: true, link: "/products/semi-automatic-pet-stretch-blow-moulding-machine" },
      { text: ", an " },
      { text: "automatic hand feed blow moulding machine", bold: true, link: "/products/automatic-hand-feed-pet-perform-stretch-blow-moulding-machine" },
      { text: " or a " },
      { text: "fully automatic stretch blow moulding machine", bold: true, link: "/products/fully-automatic-pet-stretch-blow-moulding-machine-manufacturer" },
      { text: ", our team helps keep your PET bottle production running." },
    ],
  },
  {
    type: "h2",
    text: "Our Services",
  },
  {
    type: "checklist",
    items: [
      "Installation and commissioning across India and export markets",
      "Operator training on heating, stretching and blowing settings",
      "Preventive maintenance and machine overhaul",
      "Breakdown support and troubleshooting",
      "Machine upgrades and new moulds for new bottle designs",
      "Genuine spare parts dispatch",
    ],
  },
  {
    type: "h2",
    text: "Commonly Required Spare Parts",
  },
  {
    type: "list",
    items: [
      "Infrared heater lamps",
      "Blow nozzle seals and O-rings",
      "Solenoid valves and pneumatic fittings",
      "Cylinder seal kits",
      "Stretch rods and tips",
      "Moulds for new bottle sizes",
    ],
  },
  {
    type: "paragraph",
    content: [
      { text: "For routine care, follow our " },
      { text: "PET bottle blow machine maintenance checklist", bold: true, link: "/blog/pet-bottle-blow-machine-maintenance-checklist" },
      { text: ". For spares or a service visit, " },
      { text: "contact our service team", bold: true, link: "/contact-us" },
      { text: " or call +91 9871494249 with your machine model." },
    ],
  },
];

export const metadata = {
  title: "Spare Parts & Service for Blow Moulding Machines | Suraj Plastic",

  description:
    "Genuine spare parts, installation, maintenance and after-sales service for PET stretch blow moulding machines from Suraj Plastic Industries, New Delhi.",

  keywords: ["Stretch Blow Moulding Machine Spare Parts", "Blow Moulding Machine Service", "Suraj Plastic Industries"],

  alternates: {
    canonical: "/spare-service",
  },
};

export default function SpareServiceHero() {
  return (
    <>
    <section className="relative h-[450px] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/spare-bg.webp')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center px-6 lg:px-10">

        <div>

          <h1 className="font-urbanist text-[20px] font-semibold uppercase tracking-wide text-white lg:text-[30px]">
            Spare & Services
          </h1>

          <div className="mt-1 flex items-center gap-3 font-urbanist text-white">

            <Link
              href="/"
              className="flex items-center gap-2 transition hover:text-[#CB6801]"
            >
              <FaHouse className="text-base" />
              Home
            </Link>

            <FaChevronRight className="text-sm text-white/70" />

            <span className="text-white/90">
              Spare & Service
            </span>

          </div>

        </div>

      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 h-[8px] w-full bg-[#143D7A]" />

    </section>

    <div className="pt-16">
      <SeoRenderer content={content} />
    </div>
    </>
  );
}