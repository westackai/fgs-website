import { Sprout, Factory, Cpu, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Sprout,
      title: "Tur Dal (Pigeon Peas)",
      description:
        "Premium quality Tur Dal, rich in protein and essential nutrients. Processed with care to retain natural flavor.",
    },
    {
      icon: Sprout,
      title: "Chana Dal (Split Chickpeas)",
      description:
        "Finely processed Chana Dal, perfect for a variety of Indian dishes. Free from artificial polish and additives.",
    },
    {
      icon: Sprout,
      title: "Moong Dal (Green Gram)",
      description:
        "Healthy and nutritious Moong Dal. Easy to digest and processed under strict hygiene standards.",
    },
    {
      icon: Factory,
      title: "Custom Milling",
      description:
        "State-of-the-art custom milling services for farmers and businesses, ensuring high yield and quality output.",
    },
    {
      icon: Truck,
      title: "Bulk Supply",
      description:
        "Reliable bulk supply chain for wholesalers and retailers with timely delivery across the region.",
    },
    {
      icon: Cpu,
      title: "Technology Consulting",
      description:
        "Expert consulting on pulse processing technology and machinery setup for new ventures.",
    },
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Premium Products & Services
          </h2>
          <p className="text-muted-foreground">
            From farm-fresh pulses to advanced processing solutions, we offer
            the best in quality and service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-card"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
