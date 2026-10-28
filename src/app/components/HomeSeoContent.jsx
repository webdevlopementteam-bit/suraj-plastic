import SeoRenderer from "./product/SeoRenderer";

const content = [
  {
    type: "h2",
    text: "Leading Stretch Blow Moulding Machine Manufacturer in India",
  },

  {
    type: "paragraph",
    content: [
      { text: "Suraj Plastic Industries is a " },
      { text: "Stretch Blow Moulding Machine Manufacturer", bold: true },
      { text: " based in Nangloi, New Delhi. Established in 1982 and building PET preform stretch blow moulding machines since 1997, we have sold more than 4000 machines in India and export to 12+ countries. Our ISO 9001:2015 certified machines convert PET preforms into bottles and jars from 50 ml to 25 litres for drinking water, soft drinks, juice, edible oil, pharmaceuticals, cosmetics, detergents and lubricants." },
    ],
  },

  {
    type: "paragraph",
    text: "Every machine uses the same proven stretch blow moulding process: infrared heating of the preform, mechanical stretching with a stretch rod and high-pressure air blowing inside the mould. What changes from model to model is the level of automation and output, so you can choose the machine that matches your production target and budget.",
  },

  {
    type: "h2",
    text: "Our Stretch Blow Moulding Machine Range",
  },

  {
    type: "checklist",
    items: [
      [
        { text: "Semi Automatic Stretch Blow Moulding Machine", bold: true, link: "/products/semi-automatic-pet-stretch-blow-moulding-machine" },
        { text: " — HP Series for 50 ml to 25 litre bottles and jars, up to 700 bottles per hour. Ideal for startups and small plants." },
      ],
      [
        { text: "High Speed PET Preform Stretch Blow Moulding Machine", bold: true, link: "/products/high-speed-pet-preform-stretch-blow-moulding-machine" },
        { text: " — HS Series with 2, 3 and 4 cavity moulds and up to 3,000 bottles per hour." },
      ],
      [
        { text: "Automatic Hand Feed Blow Moulding Machine", bold: true, link: "/products/automatic-hand-feed-pet-perform-stretch-blow-moulding-machine" },
        { text: " — SAB-HF Series automatic hand feed PET perform stretch blow moulding machine, up to 5,400 bottles per hour." },
      ],
      [
        { text: "Fully Automatic Stretch Blow Moulding Machine", bold: true, link: "/products/fully-automatic-pet-stretch-blow-moulding-machine-manufacturer" },
        { text: " — SPI AY Series with automatic preform feeding, 2 to 6 cavities and up to 6,000 bottles per hour." },
      ],
      [
        { text: "PET Jar Making Machine", bold: true, link: "/products/pet-jar-making-machine" },
        { text: " — wide-mouth jars from 50 ml to 7,000 ml for food, oil and cosmetic packaging." },
      ],
      [
        { text: "Mineral Water Bottle Making Machine", bold: true, link: "/products/mineral-water-bottle-making-machine-manufacturer" },
        { text: " — complete machine options for packaged drinking water plants, from 200 ml bottles to 20 litre jars." },
      ],
    ],
  },

  {
    type: "h2",
    text: "Why Buy From an Experienced Stretch Blow Moulding Machine Manufacturer?",
  },

  {
    type: "paragraph",
    content: [
      { text: "As a " },
      { text: "preform stretch blow moulding machine manufacturer", bold: true, link: "/products/preform-stretch-blow-moulding-machine-manufacturer" },
      { text: " with decades of experience, we design the heating, stretching and blowing systems in-house and test every machine before dispatch. We also manufacture moulds to your bottle design and provide installation, commissioning, operator training, spare parts and after-sales service across India." },
    ],
  },

  {
    type: "paragraph",
    content: [
      { text: "Whether you are looking for a " },
      { text: "PET bottle blow machine manufacturer", bold: true, link: "/products/pet-bottle-blow-machine-manufacturer" },
      { text: " for a new plant or an " },
      { text: "automatic PET bottle moulding machine manufacturer", bold: true, link: "/products/automatic-pet-bottle-moulding-machine-manufacturer" },
      { text: " to scale up output, our engineers will recommend the right machine based on your bottle size, neck size and daily production target. Read " },
      { text: "how to choose a stretch blow moulding machine manufacturer", bold: true, link: "/blog/how-to-choose-stretch-blow-moulding-machine-manufacturer" },
      { text: " before you compare quotations." },
    ],
  },

  {
    type: "table",
    headers: ["Machine", "Operation", "Bottle Size", "Output"],
    rows: [
      ["Semi Automatic (HP Series)", "Manual loading, automatic moulding", "50 ML – 25 LTR", "Up to 700 BPH"],
      ["High Speed (HS Series)", "Semi automatic, multi-cavity", "50 ML – 7000 ML", "Up to 3,000 BPH"],
      ["Automatic Hand Feed (SAB-HF)", "Hand feed, automatic stretch & blow", "50 ML – 7000 ML", "Up to 5,400 BPH"],
      ["Fully Automatic (SPI AY)", "Automatic feeding & discharge", "600 ML – 2 LTR", "Up to 6,000 BPH"],
    ],
  },
];

export default function HomeSeoContent() {
  return (
    <div className="pt-16">
      <SeoRenderer content={content} />
    </div>
  );
}
