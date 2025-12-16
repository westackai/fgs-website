import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const Registrations = () => {
  const certifications = [
    { src: "/certificate/certificate 00001.png", alt: "Certification 1" },
    { src: "/certificate/certificate 00002.png", alt: "Certification 2" },
    { src: "/certificate/certificate 00003.png", alt: "Certification 3" },
    { src: "/certificate/certificate 00004.png", alt: "Certification 4" },
  ];

  return (
    <section className="py-20 bg-background border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <CheckCircle2 size={14} /> Certified Excellence
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-forest mb-4">
            Our Registrations & Certifications
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We adhere to the highest international standards of quality and food
            safety.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative aspect-[16/7] bg-white rounded-2xl p-4 shadow-md border border-border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Registrations;
