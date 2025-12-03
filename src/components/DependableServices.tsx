import { Award, Users, Leaf, Zap } from "lucide-react";
import farmersTeam from "@/assets/farmers-team.jpg";

const DependableServices = () => {
  const features = [
    {
      icon: Zap,
      title: "Modern Machinery",
      description:
        "Equipped with the latest sorting and polishing technology for superior grain quality.",
    },
    {
      icon: Users,
      title: "Skilled Team",
      description:
        "A dedicated team of experts ensuring precision and hygiene in every batch processed.",
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description:
        "Committed to sustainable practices with zero-waste processing and energy efficiency.",
    },
    {
      icon: Award,
      title: "Certified Quality",
      description:
        "ISO 9001:2015 and FSSAI certified, guaranteeing food safety and international standards.",
    },
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-8">
              Your Trusted Partner in Grain Processing
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

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={farmersTeam}
                alt="Sustainable farming practices"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DependableServices;
