import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm.jpg";

const CTA = () => {
  return (
    <section className="py-20 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Grow Your Farm's Potential Today With Confidence
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Join hundreds of farmers who have transformed their operations with our sustainable solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
              Start Now <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
