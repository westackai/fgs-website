import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import greenhouseImg from "@/assets/greenhouse.jpg";
import irrigationImg from "@/assets/irrigation.jpg";

const Projects = () => {
  const projects = [
    {
      image: greenhouseImg,
      title: "Organic Farming Initiative",
      description: "A community-wide project helping 50+ local farms transition to certified organic practices.",
      tags: ["Organic", "Community"],
    },
    {
      image: irrigationImg,
      title: "Greenhouse Program",
      description: "State-of-the-art greenhouse facilities for year-round organic produce cultivation.",
      tags: ["Technology", "Sustainable"],
    },
    {
      image: greenhouseImg,
      title: "Irrigation Upgrade Plan",
      description: "Smart water management systems reducing water usage by 40% while improving crop yields.",
      tags: ["Water", "Efficiency"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Eco-Friendly Projects for Modern Agriculture
          </h2>
          <p className="text-muted-foreground">
            Discover our latest initiatives making a real difference in sustainable farming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 bg-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0 h-auto gap-1">
                  Learn More <ArrowRight size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
