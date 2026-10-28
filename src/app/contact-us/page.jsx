import ContactForm from "../components/contact/ContactForm";

export const metadata = {
  title: "Contact Us | Suraj Plastic Industries, Nangloi, New Delhi",

  description:
    "Contact Suraj Plastic Industries, Nangloi, New Delhi. Call +91 9871494249 or email info@surajplasticindustries.in for a stretch blow moulding machine quote.",

  keywords: ["Contact Suraj Plastic Industries", "Stretch Blow Moulding Machine Manufacturer Delhi"],

  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
