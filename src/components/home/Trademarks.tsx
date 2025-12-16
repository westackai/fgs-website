import Image from "next/image";

const Trademarks = () => {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-forest mb-4">
            Our Trademarks
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our commitment to quality is represented by our registered
            trademarks.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center mb-12 transition-all duration-500">
          {/* Large Trademark Images */}
          <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden transition-transform hover:scale-105 duration-300">
            <Image
              src="/trademark.png"
              alt="Registered Trademark 1"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden transition-transform hover:scale-105 duration-300">
            <Image
              src="/trademark2.png"
              alt="Registered Trademark 2"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden transition-transform hover:scale-105 duration-300">
            <Image
              src="/trademark3.png"
              alt="Registered Trademark 3"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs text-muted-foreground/60 uppercase tracking-widest">
            Protected Intellectual Property of Fresh Grain and Spices
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trademarks;
