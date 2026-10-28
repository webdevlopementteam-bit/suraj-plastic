import Image from "next/image";

const certificates = [
  {
    image: "/home/fieo.webp",
    alt: "FIEO",
  },
  {
    image: "/home/msme.webp",
    alt: "MSME",
  },
  {
    image: "/home/uk.webp",
    alt: "UK Cert",
  },
  {
    image: "/home/iso.webp",
    alt: "ISO 9001:2015",
  },
];

export default function Certified() {
  return (
   <>
     <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <span className="block font-baloo text-[35px] font-bold text-center">
          Certified By
        </span>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-12 items-center">

          {certificates.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center group"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={260}
                height={180}
                className="h-[170px] w-auto object-contain transition-all duration-500 group-hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
     
   </>
  );
}