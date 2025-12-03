import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm.jpg";

const Hero = () => {
  const stats = [
    { icon: "🌱", label: "Organic Certified" },
    { icon: "🚜", label: "Modern Equipment" },
    { icon: "👨‍🌾", label: "Expert Farmers" },
    { icon: "🌍", label: "Eco Friendly" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6 animate-fade-in">
            🌿 Sustainable Agriculture Solutions
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Empowering Farms with Modern Sustainability
          </h1>
          
          <p className="text-lg text-primary-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Transform your agricultural practices with eco-friendly solutions that increase yield while preserving our planet for future generations.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              Get Started <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2">
              <Play size={18} /> Watch Video
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground/90">
                <span className="text-xl">{stat.icon}</span>
                <span className="text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
