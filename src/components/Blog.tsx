import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import greenhouseImg from "@/assets/greenhouse.jpg";
import irrigationImg from "@/assets/irrigation.jpg";

const Blog = () => {
  const posts = [
    {
      image: greenhouseImg,
      category: "Sustainability",
      title: "Greener Farming Future Goals",
      excerpt: "Exploring the future of sustainable agriculture and eco-friendly farming practices.",
      date: "Nov 15, 2024",
    },
    {
      image: irrigationImg,
      category: "Pest Control",
      title: "Natural Pest Control Solutions",
      excerpt: "Effective organic methods to protect your crops without harmful chemicals.",
      date: "Nov 10, 2024",
    },
    {
      image: greenhouseImg,
      category: "Success Stories",
      title: "Organic Farming Success Stories",
      excerpt: "Real farmers share their journey to sustainable organic farming.",
      date: "Nov 5, 2024",
    },
  ];

  return (
    <section id="blog" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Blog</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Latest Insights for Organic Farming Growth
          </h2>
          <p className="text-muted-foreground">
            Stay updated with the latest trends, tips, and success stories in sustainable agriculture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 bg-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  {post.category}
                </span>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all">
                  Read More <ArrowRight size={16} />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
