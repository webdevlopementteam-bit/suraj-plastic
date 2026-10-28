import CareerForm from "../components/career/CareerForm";

export const metadata = {
    title: "Career | Suraj Plastic Industries",

    description:
        "Build your career at Suraj Plastic Industries, a PET stretch blow moulding machine manufacturer in Nangloi, New Delhi. Submit your details to apply.",

    keywords: ["Suraj Plastic Industries Careers", "Jobs at Suraj Plastic Industries"],

    alternates: {
        canonical: "/career",
    },
};

export default function CareerPage() {
    return <CareerForm />;
}
