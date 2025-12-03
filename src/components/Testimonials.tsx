import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Organic Farm Owner",
      content: "Aglora transformed our family farm. Their expertise in sustainable practices increased our yield by 40% while reducing costs.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Agricultural Cooperative Director",
      content: "The team's dedication to eco-friendly solutions is unmatched. They've helped our entire community transition to organic farming.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Vineyard Manager",
      content: "Outstanding support and innovative solutions. Our soil health has never been better since working with Aglora.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Trusted by Farmers & Growing Communities
            </h2>
            <p className="text-muted-foreground">
              Hear from the farmers and agricultural professionals who have transformed their operations with our sustainable solutions.
            </p>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <Card key={index} className="bg-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
