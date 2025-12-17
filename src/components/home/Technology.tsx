import { Settings, ShieldCheck, Leaf, BarChart } from "lucide-react";
import Image from "next/image";
import technologyImg from "@/assets/irrigation.jpg"; // Using existing image as placeholder

const Technology = () => {
  const features = [
    {
      icon: Settings,
      title: "Advanced Milling Process",
      description:
        "Our multi-stage milling process includes cleaning, grading, pitting, and polishing to ensure the highest quality output.",
    },
    {
      icon: BarChart,
      title: "Operational Efficiency",
      description:
        "Automated machinery reduces wastage and increases processing speed, ensuring timely delivery of large orders.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Control",
      description:
        "Rigorous quality checks at every stage of processing to meet international food safety standards.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We employ pollution control measures and energy-efficient machinery to minimize our environmental footprint.",
    },
  ];

  return (
    <section id="technology" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={technologyImg}
                alt="Modern Processing Technology"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">High Tech</div>
                  <div className="text-sm text-muted-foreground">
                    Automated Systems
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Technology & Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
              State-of-the-Art Processing Infrastructure
            </h2>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
