import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import greenhouseImg from "@/assets/greenhouse.jpg";
import irrigationImg from "@/assets/irrigation.jpg";

const Projects = () => {
  const projects = [
    {
      image: greenhouseImg,
      title: "Mega Food Park Installation",
      description:
        "Successfully installed a 50TPD pulse processing unit at the regional Mega Food Park.",
      tags: ["Installation", "Industrial"],
    },
    {
      image: irrigationImg,
      title: "Export Quality Processing",
      description:
        "Processed and exported over 500 tons of premium Toor Dal to Middle Eastern markets.",
      tags: ["Export", "Global"],
    },
    {
      image: greenhouseImg,
      title: "Organic Certification Drive",
      description:
        "Partnered with 200+ farmers to produce certified organic pulses for domestic retail chains.",
      tags: ["Organic", "Supply Chain"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Track Record
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Projects & Clients
          </h2>
          <p className="text-muted-foreground">
            Showcasing our successful installations and major supply chain
            achievements.
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
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                {/* <Button
                  variant="ghost"
                  className="text-primary hover:text-primary/80 p-0 h-auto gap-1"
                >
                  Learn More <ArrowRight size={16} />
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
