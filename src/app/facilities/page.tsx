import Image from "next/image";
import {
  Factory,
  Database,
  Zap,
  Cpu,
  Activity,
  BarChart3,
  Wind,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] pt-10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/facilities/Bbuilding Poster.png"
            alt="Facility Overview"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6 animate-fade-in">
            <Factory size={14} /> State-of-the-Art Infrastructure
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            World-Class Facilities
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-white/80">
            Advanced technology and massive capacity to meet global demand with
            precision and quality.
          </p>
        </div>
      </section>

      {/* Facility Overview - Storage */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-semibold mb-6">
                <div className="h-px w-8 bg-primary"></div>
                Storage & Handling
              </div>
              <h2 className="text-4xl font-bold text-forest mb-6">
                Massive Storage Capacity
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our facility is equipped with extensive storage capabilities to
                ensure consistent supply and grain preservation throughout the
                year.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-border">
                  <Database className="text-primary mb-3" size={28} />
                  <div className="text-3xl font-bold text-forest mb-1">66</div>
                  <div className="text-sm text-muted-foreground">
                    Number of Tanks
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-border">
                  <Activity className="text-primary mb-3" size={28} />
                  <div className="text-3xl font-bold text-forest mb-1">
                    1200 MT
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Storage Capacity
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-border sm:col-span-2">
                  <ArrowRight className="text-primary mb-3" size={28} />
                  <div className="text-3xl font-bold text-forest mb-1">
                    10 Tons/Hr
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Lift / Circulation Capacity
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/facilities/Elevator.png"
                alt="Grain Elevator"
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="font-bold text-xl">
                    High-Speed Circulation
                  </div>
                  <div className="text-white/80">
                    Ensuring efficient grain movement
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Plant */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-forest mb-4">
              Advanced Cleaning Plant
            </h2>
            <p className="text-muted-foreground text-lg">
              Precision cleaning systems designed to remove impurities and
              ensure only the best grains move forward in the process.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12 animate-fade-in-up">
            <div className="bg-forest text-cream p-8 rounded-3xl flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">
                Key Metrics
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span>Cleaning Plants</span>
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Dall Mills</span>
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Machinery Type</span>
                  <span className="text-right font-medium text-primary">
                    4 Advanced
                    <br />2 Local
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Daily Output</span>
                  <span className="text-2xl font-bold text-primary">
                    200 Tons
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Power</span>
                  <span className="text-xl font-bold text-primary flex items-center gap-1">
                    <Zap size={16} /> 250 KW
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/facilities/Dryer - Heating Chamber.png"
                  alt="Heating Chamber"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-md">
                  Heating Chamber
                </div>
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/facilities/Condenser.png"
                  alt="Condenser"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-md">
                  Condenser Unit
                </div>
              </div>
              <div className="relative h-64 md:h-96 col-span-full rounded-2xl overflow-hidden">
                <Image
                  src="/facilities/Dryer 2.png"
                  alt="Industrial Dryer"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-md">
                  Industrial Dryer System
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sortex Section */}
      <section className="py-20 bg-forest text-cream overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              {/* Decorative background elements */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>

              <div className="relative z-10 grid gap-6">
                <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/facilities/Sortex Machine.png"
                    alt="Sortex Machine"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative h-48 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                    <Image
                      src="/facilities/Sortex 2.png"
                      alt="Sortex AI"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                    <Image
                      src="/facilities/Sortex 3.png"
                      alt="Sortex Processing"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Cpu size={16} /> AI Powered
              </div>
              <h2 className="text-4xl font-bold mb-6">UHD Sortex Technology</h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                We utilize state-of-the-art **Meyer Sortex** machines featuring
                UHD AI Technology with Wormhole Detection. This ensures every
                grain meets the highest standards of purity and color
                consistency.
              </p>

              <div className="grid gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Meyer AI Tech</div>
                    <div className="text-sm text-white/60">
                      Wormhole Detection Enabled
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">180 Tons</div>
                    <div className="text-sm text-white/60">
                      Daily Processing Capacity
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Zap size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg">100 KW</div>
                    <div className="text-sm text-white/60">
                      Energy Efficiency
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-forest mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the difference that world-class infrastructure makes in
            product quality and reliability.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8"
          >
            Contact Sales
          </Button>
        </div>
      </section>
    </div>
  );
}
