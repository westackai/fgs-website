import { Sprout, Microscope, Calendar, Cpu, Truck, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Sprout,
      title: "Farm Management",
      description: "Complete farm management solutions to optimize your agricultural operations and maximize productivity.",
    },
    {
      icon: Microscope,
      title: "Soil Health & Testing",
      description: "Advanced soil analysis and health monitoring to ensure optimal growing conditions for your crops.",
    },
    {
      icon: Calendar,
      title: "Crop Planning",
      description: "Strategic crop rotation and seasonal planning to maintain soil health and increase yields.",
    },
    {
      icon: Cpu,
      title: "Smart Agri Tools",
      description: "Modern technology integration including IoT sensors and data analytics for precision farming.",
    },
    {
      icon: Truck,
      title: "Product Distribution",
      description: "Efficient supply chain solutions to get your organic produce to market quickly and safely.",
    },
    {
      icon: GraduationCap,
      title: "Farmer Training",
      description: "Educational programs and workshops to help farmers adopt sustainable practices.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Sustainable Solutions for Modern Farming
          </h2>
          <p className="text-muted-foreground">
            Comprehensive agricultural services designed to help your farm thrive while protecting our environment.
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
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
