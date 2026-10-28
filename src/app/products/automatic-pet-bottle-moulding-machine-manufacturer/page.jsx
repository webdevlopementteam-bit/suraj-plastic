import Hero from "../../components/product/Hero";
import SeoRenderer from "../../components/product/SeoRenderer";
import JsonLd from "../../components/JsonLd";
import { faqSchemaFromBlocks, productBreadcrumbSchema } from "@/app/lib/seo";

const PAGE_NAME = "Automatic PET Bottle Moulding Machine Manufacturer";
const PAGE_PATH = "/products/automatic-pet-bottle-moulding-machine-manufacturer";

export const metadata = {
  title: "Automatic PET Bottle Moulding Machine Manufacturer in India",

  description:
    "Automatic PET Bottle Moulding Machine Manufacturer in Delhi. Hand feed & fully automatic models for 50 ml to 7 L bottles, up to 6,000 BPH. Get a quote.",

  keywords:
    "Automatic PET Bottle Moulding Machine Manufacturer, Automatic PET Bottle Moulding Machine, Automatic PET Bottle Making Machine, Automatic PET Blow Moulding Machine Manufacturer, Automatic PET Bottle Moulding Machine Manufacturer in Delhi",

  alternates: {
    canonical: PAGE_PATH,
  },

  openGraph: {
    type: "website",
    url: PAGE_PATH,
    siteName: "Suraj Plastic Industries",
    locale: "en_IN",
    title: "Automatic PET Bottle Moulding Machine Manufacturer in India",
    description:
      "Hand feed and fully automatic PET bottle moulding machines from 50 ml to 7 L with outputs up to 6,000 BPH.",
    images: ["/product/product5.webp"],
  },
};

const content = [
  {
    type: "paragraph",
    content: [
      { text: "Suraj Plastic Industries is an " },
      { text: "Automatic PET Bottle Moulding Machine Manufacturer", bold: true },
      { text: " based in Nangloi, New Delhi. Since 1997 we have designed and built PET stretch blow moulding machines that turn PET preforms into finished bottles and jars for drinking water, soft drinks, juice, edible oil, pharmaceuticals, cosmetics, detergents and lubricants. With 4000+ machines sold and exports to 12+ countries, our automatic range is built for plants that want higher output, lower labour cost and consistent bottle quality on every shift." },
    ],
  },

  {
    type: "paragraph",
    text: "This page explains the two types of automatic PET bottle moulding machine we manufacture, the models and outputs available, the utilities your plant needs, and how to choose the right configuration for your production target.",
  },

  {
    type: "h2",
    text: "What Is an Automatic PET Bottle Moulding Machine?",
  },

  {
    type: "paragraph",
    text: "An automatic PET bottle moulding machine is a stretch blow moulding machine in which the moulding cycle runs automatically: the heated PET preform is clamped in the mould, stretched by a stretch rod, blown with low- and high-pressure air, cooled and ejected without the operator controlling each step. Compared with a semi automatic machine, automation gives a shorter cycle time, more uniform wall thickness and repeatable bottle weight, which is why bottling plants with daily targets of tens of thousands of bottles move to automatic machines.",
  },

  {
    type: "paragraph",
    text: "Automatic machines are two-stage machines. Preforms are injection moulded separately (or bought from a preform supplier) and then reheated by infrared heaters in the blow moulding machine. This lets you change bottle size or shape by changing the mould, without changing the preform plant.",
  },

  {
    type: "h2",
    text: "Types of Automatic PET Bottle Moulding Machines We Manufacture",
  },

  {
    type: "h3",
    text: "1. Automatic Hand Feed PET Bottle Moulding Machine (SAB-HF Series)",
  },

  {
    type: "paragraph",
    content: [
      { text: "In the " },
      { text: "automatic hand feed blow moulding machine", bold: true, link: "/products/automatic-hand-feed-pet-perform-stretch-blow-moulding-machine" },
      { text: ", the operator places preforms on the feeding line by hand and the machine heats, transfers, stretches, blows and ejects bottles automatically. It needs less manual work than a semi automatic machine, costs less than a fully automatic line and delivers up to 5,400 bottles per hour on the 6-cavity model. It is the most popular choice for growing water and edible oil plants." },
    ],
  },

  {
    type: "h3",
    text: "2. Fully Automatic PET Bottle Moulding Machine (SPI AY Series)",
  },

  {
    type: "paragraph",
    content: [
      { text: "Our " },
      { text: "fully automatic stretch blow moulding machine", bold: true, link: "/products/fully-automatic-pet-stretch-blow-moulding-machine-manufacturer" },
      { text: " adds automatic preform feeding and orientation, so the complete process from preform hopper to finished bottle runs without manual handling. The SPI AY Series is available in 2, 4 and 6 cavity options, with select models rated up to 6,000 BPH for 600 ml bottles. It is designed for high-volume packaged drinking water, carbonated soft drink and juice lines." },
    ],
  },

  {
    type: "h2",
    text: "Automatic PET Bottle Moulding Machine Models and Output",
  },

  {
    type: "paragraph",
    text: "The table below lists rated outputs for our main automatic models. Actual output depends on bottle design, preform weight, neck size and operating conditions.",
  },

  {
    type: "table",
    headers: ["Model", "Type", "Cavities", "Bottle Size", "Output (Theoretical)"],
    rows: [
      ["SAB-500-4BHF", "Automatic Hand Feed", "4", "50 ML – 500 ML", "3000–3600 BPH"],
      ["SAB-500-6BHF", "Automatic Hand Feed", "6", "50 ML – 500 ML", "4800–5400 BPH"],
      ["SAB-1000-2BHF", "Automatic Hand Feed", "2", "100 ML – 1000 ML", "1700–2000 BPH"],
      ["SAB-1000-4BHF", "Automatic Hand Feed", "4", "100 ML – 1000 ML", "3000–3600 BPH"],
      ["SAB-2000-2JBHF", "Automatic Hand Feed", "2", "200 ML – 2000 ML", "1200–1600 BPH"],
      ["SAB-5000-JBHF", "Automatic Hand Feed", "2 / 1", "1000 ML – 7000 ML", "1200–1600 BPH (up to 2 L) / 600–800 BPH (up to 5 L)"],
      ["SPI AY600", "Fully Automatic", "4 / 6", "600 ML", "Up to 4,000 / 6,000 BPH"],
      ["SPI AY1500", "Fully Automatic", "2 / 4", "1.5 L", "Up to 2,000 / 3,600 BPH"],
      ["SPI AY2000", "Fully Automatic", "2 / 4", "2 L", "Up to 1,800 / 3,600 BPH"],
    ],
  },

  {
    type: "h2",
    text: "Key Features of Our Automatic PET Bottle Moulding Machines",
  },

  {
    type: "benefits",
    items: [
      {
        title: "Infrared Preform Heating",
        description:
          "Infrared heaters bring every preform to a uniform temperature, giving even material distribution and clear, strong bottles.",
      },
      {
        title: "Automatic Stretch & Blow Cycle",
        description:
          "Clamping, stretching, pre-blow, high-pressure blow, exhaust and ejection run in a fixed sequence for repeatable bottle weight and shape.",
      },
      {
        title: "Simple Controls",
        description:
          "Production parameters are set and monitored from the control panel (PLC touchscreen on SPI AY models), so operators can change settings quickly and keep output steady.",
      },
      {
        title: "Multi-Cavity Moulds",
        description:
          "1, 2, 4 and 6 cavity moulds let you match the machine to your bottles-per-hour target and bottle size.",
      },
      {
        title: "Wide Neck & Size Range",
        description:
          "Neck diameters up to 120 MM and bottle sizes up to 7 litres on hand feed models cover bottles as well as wide-mouth jars.",
      },
      {
        title: "Installation & Training",
        description:
          "Our engineers install, commission and train your operators, and provide spares and service support after the sale.",
      },
    ],
  },

  {
    type: "h2",
    text: "Plant Requirements for an Automatic PET Bottle Moulding Machine",
  },

  {
    type: "paragraph",
    text: "Plan utilities before the machine arrives. Typical requirements for our automatic hand feed models are:",
  },

  {
    type: "list",
    items: [
      "Connected load: 36 KW to 60 KW depending on model",
      "Low-pressure air: 2–3 M³/MIN at 10 KG/CM²",
      "High-pressure blowing air: 2–3 M³/MIN at 25 KG/CM² from a high-pressure compressor",
      "Chilled water for mould and heating system: 3–4 M³/HR at 5°C",
      "Floor area: approximately 6.5 × 6.5 metres to 8 × 7 metres with 3.5 metre height",
      "Machine weight: 4 to 5 tonnes",
    ],
  },

  {
    type: "paragraph",
    text: "Our team shares a complete layout and utility list with your quotation so that the compressor, chiller and electrical supply are sized correctly.",
  },

  {
    type: "h2",
    text: "Applications of Automatic PET Bottle Moulding Machines",
  },

  {
    type: "applications",
    items: [
      {
        title: "Packaged Drinking Water",
        points: ["200 ml to 2 litre water bottles", "High-speed lines for mineral water plants"],
      },
      {
        title: "Beverages",
        points: ["Carbonated soft drinks", "Juice and energy drinks"],
      },
      {
        title: "Edible Oil",
        points: ["500 ml to 5 litre oil bottles and jars"],
      },
      {
        title: "Pharma & Personal Care",
        points: ["Syrup bottles", "Shampoo, lotion and hair oil bottles"],
      },
      {
        title: "Household & Industrial",
        points: ["Detergent, cleaner and lubricant containers"],
      },
      {
        title: "Food Jars",
        points: ["Wide-mouth jars for dry fruits, spices and confectionery"],
      },
    ],
  },

  {
    type: "paragraph",
    content: [
      { text: "Starting a water plant? See our dedicated " },
      { text: "mineral water bottle making machine manufacturer", bold: true, link: "/products/mineral-water-bottle-making-machine-manufacturer" },
      { text: " page for capacity planning by bottle size." },
    ],
  },

  {
    type: "h2",
    text: "Automatic vs Semi Automatic PET Bottle Moulding Machine",
  },

  {
    type: "comparison",
    headers: ["Feature", "Semi Automatic", "Automatic Hand Feed", "Fully Automatic"],
    rows: [
      ["Preform loading", "Manual", "Manual on feeding line", "Automatic"],
      ["Moulding cycle", "Operator controlled", "Automatic", "Automatic"],
      ["Typical output", "Up to 700 BPH", "Up to 5,400 BPH", "Up to 6,000 BPH"],
      ["Investment", "Lowest", "Medium", "Highest"],
      ["Best for", "Startups, large containers", "Growing plants", "High-volume bottling lines"],
    ],
  },

  {
    type: "paragraph",
    content: [
      { text: "If your requirement is below 700 bottles per hour or you make large 5 to 25 litre containers, a " },
      { text: "semi automatic stretch blow moulding machine", bold: true, link: "/products/semi-automatic-pet-stretch-blow-moulding-machine" },
      { text: " is usually more economical. Browse all " },
      { text: "PET bottle blow machine", bold: true, link: "/products/pet-bottle-blow-machine-manufacturer" },
      { text: " types to compare." },
    ],
  },

  {
    type: "h2",
    text: "How to Choose the Right Automatic PET Bottle Moulding Machine",
  },

  {
    type: "table",
    headers: ["Question", "Why It Matters"],
    rows: [
      ["How many bottles do you need per day?", "Divide by working hours to get the BPH target, then choose the cavity count"],
      ["What bottle sizes and neck sizes?", "Decides the model series and mould design"],
      ["How often will you change bottle size?", "Frequent changes favour hand feed models with quick mould changeover"],
      ["What utilities are available?", "Compressor, chiller and power must match the machine"],
      ["How much labour is available?", "Labour shortages favour fully automatic machines"],
      ["What after-sales support is offered?", "Fast service and spares reduce downtime"],
    ],
  },

  {
    type: "h2",
    text: "Why Choose Suraj Plastic Industries as Your Automatic PET Bottle Moulding Machine Manufacturer?",
  },

  {
    type: "list",
    items: [
      "In blow and injection moulding since 1982 and PET stretch blow moulding machines since 1997",
      "ISO 9001:2015 certified manufacturing",
      "4000+ machines sold in India and 12+ export countries",
      "Hand feed and fully automatic models from 50 ml to 7 litres",
      "Custom moulds for your bottle design",
      "Installation, commissioning, operator training and spare parts support",
    ],
  },

  {
    type: "paragraph",
    content: [
      { text: "As a complete " },
      { text: "stretch blow moulding machine manufacturer", bold: true, link: "/" },
      { text: " and " },
      { text: "preform stretch blow moulding machine manufacturer", bold: true, link: "/products/preform-stretch-blow-moulding-machine-manufacturer" },
      { text: ", we recommend the machine that fits your output and budget, not simply the biggest model." },
    ],
  },

  {
    type: "paragraph",
    content: [
      { text: "To size the machine and estimate payback, read our " },
      { text: "automatic PET bottle moulding machine output and ROI guide", bold: true, link: "/blog/automatic-pet-bottle-moulding-machine-output-and-roi" },
      { text: "." },
    ],
  },

  {
    type: "h2",
    text: "Frequently Asked Questions",
  },

  {
    type: "faq",
    items: [
      {
        question: "Who is the best automatic PET bottle moulding machine manufacturer in India?",
        answer:
          "Suraj Plastic Industries in Nangloi, New Delhi has manufactured PET stretch blow moulding machines since 1997, with 4000+ machines sold and exports to 12+ countries. It makes automatic hand feed (SAB-HF) and fully automatic (SPI AY) PET bottle moulding machines with installation and after-sales support.",
      },
      {
        question: "What is the production capacity of an automatic PET bottle moulding machine?",
        answer:
          "Automatic hand feed models produce 1,200 to 5,400 bottles per hour depending on cavities and bottle size. Fully automatic SPI AY models are rated up to 6,000 bottles per hour for 600 ml bottles.",
      },
      {
        question: "What is the difference between an automatic hand feed and a fully automatic PET bottle moulding machine?",
        answer:
          "In an automatic hand feed machine the operator places preforms on the feeding line and the machine runs the rest automatically. A fully automatic machine also feeds and orients preforms automatically, so no manual handling is needed.",
      },
      {
        question: "What bottle sizes can an automatic PET bottle moulding machine make?",
        answer:
          "Our automatic hand feed range covers 50 ml to 7,000 ml, including wide-mouth jars with necks up to 120 MM. Fully automatic SPI AY models are configured for 600 ml, 1.5 litre and 2 litre bottles.",
      },
      {
        question: "What is the price of an automatic PET bottle moulding machine?",
        answer:
          "The price depends on the model, number of cavities, bottle size, mould design and accessories such as compressors and chillers. Share your bottle size and daily output with Suraj Plastic Industries for an exact quotation.",
      },
      {
        question: "What utilities does an automatic PET bottle moulding machine need?",
        answer:
          "You need electrical power (36 KW to 60 KW on hand feed models), low-pressure air at 10 KG/CM², high-pressure blowing air at 25 KG/CM², chilled water at about 5°C and around 7 × 7 metres of floor space.",
      },
      {
        question: "Do you provide installation and training?",
        answer:
          "Yes. Suraj Plastic Industries installs and commissions every machine, trains your operators and provides spare parts and service support across India and in export markets.",
      },
    ],
  },

  {
    type: "h2",
    text: "Get a Quote for an Automatic PET Bottle Moulding Machine",
  },

  {
    type: "paragraph",
    content: [
      { text: "Tell us your bottle size, neck size, daily output target and application, and our engineers will recommend the right automatic PET bottle moulding machine with a complete utility list. " },
      { text: "Contact Suraj Plastic Industries", bold: true, link: "/contact-us" },
      { text: " or call +91 9871494249." },
    ],
  },
];

export default function AutomaticPetBottleMouldingMachineManufacturerPage() {
  return (
    <>
      <JsonLd
        schemas={[
          faqSchemaFromBlocks(content),
          productBreadcrumbSchema(PAGE_NAME, PAGE_PATH),
        ]}
      />

      <Hero
        title={PAGE_NAME}
        image="/bg.webp"
      />

      <SeoRenderer content={content} />
    </>
  );
}
