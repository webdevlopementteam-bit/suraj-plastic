import Image from "next/image";
import Link from "next/link";

const machines = [
  {
    image: "/home/category-1.webp",
    title: "Semi Automatic Stretch Blow Moulding Machine",
    href: "/products/semi-automatic-pet-stretch-blow-moulding-machine",
  },
  {
    image: "/home/category-2.webp",
    title: "High Speed Semi Automatic Stretch Blow Moulding Machine",
    href: "/products/high-speed-pet-preform-stretch-blow-moulding-machine",
  },
  {
    image: "/home/category-3.webp",
    title: "Automatic Hand Feed Blow Moulding Machine",
    href: "/products/automatic-hand-feed-pet-perform-stretch-blow-moulding-machine",
  },
  {
    image: "/home/category-4.webp",
    title: "Fully Automatic Stretch Blow Moulding Machine",
    href: "/products/fully-automatic-pet-stretch-blow-moulding-machine-manufacturer",
  },
];

export default function FeaturedMachines() {
  return (
    <section className="py-16">
      <div className="max-w-[1500px] mx-auto px-6">
        <h2 className="font-baloo text-[35px] font-semibold text-center">
          Featured Stretch Blow Moulding Machines
        </h2>

        <p className="max-w-5xl mx-auto mt-5 text-center text-lg leading-8 text-[#4b5b74] font-urbanist">
          As a stretch blow moulding machine manufacturer since 1997, we build
          semi automatic, high speed, automatic hand feed and fully automatic
          PET stretch blow moulding machines engineered for precision,
          durability and consistent production output, delivering superior
          bottle quality across water, beverage, oil and pharma applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-8 px-3 md:px-10">
          {machines.map((item, index) => (
            <Link href={item.href} key={index} className="group">
              <div className="overflow-hidden rounded-xl border border-[#C7C7C7]">
                <div className="relative overflow-hidden bg-white px-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={420}
                    height={420}
                    className="h-[320px] w-full object-contain"
                  />

                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-y-0
                      -left-40
                      w-28
                      rotate-[25deg]
                      bg-gradient-to-b
                      from-transparent
                      via-gray-500/30
                      to-transparent
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:translate-x-[700px]
                    "
                  />
                </div>

                <div className="bg-[#CB6801] px-3 py-3">
                  <h3 className="font-baloo text-white text-[17px] font-medium text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}