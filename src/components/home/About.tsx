import farmersTeam from "@/assets/farmers-team.jpg";

const About = () => {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "50+", label: "Team Members" },
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Excellence in Grain Processing for Over 40 Years
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Fresh Grain & Spices Pvt. Ltd. (FGS) , the renowned Indore-based
              company, has been associated with premium quality dals and
              chickpeas which is enriched with proteins and nutrients. FGS has
              been consistently manufacturing and supplying quality products in
              India and abroad.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From a humble beginning with a hand mill, the company has come a
              long way in more than four decades of journey. In 2024, the brand
              came up with first of its kind fully automated Toor and Kabuli
              Chana plants.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={farmersTeam.src}
                alt="Our farming team"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg max-w-xs hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">100% Organic</div>
                  <div className="text-sm text-muted-foreground">
                    Certified sustainable
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
