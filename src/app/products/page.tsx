"use client";

import Image from "next/image";
import {
  ArrowRight,
  Leaf,
  Globe,
  TrendingUp,
  Award,
  Droplet,
  Sun,
  Heart,
  TrendingDown,
  Scale,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

export default function ProductsPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 pt-40 bg-forest text-cream overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2940&auto=format&fit=crop')",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream/10 text-cream backdrop-blur-sm border border-cream/20 text-sm font-medium mb-6"
            >
              <Award size={14} /> Premium Quality Grains
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our Products
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl max-w-2xl mx-auto text-cream/80"
            >
              Discover our range of premium pulses, processed with
              state-of-the-art technology to preserve nutrition and taste.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tur Dal Section */}
      <section className="py-20" id="tur-dal">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-primary font-semibold">
                  <div className="h-px w-8 bg-primary"></div>
                  Premium Selection
                </div>
                <h2 className="text-4xl font-bold text-forest">
                  Tur Dal (Pigeon Pea)
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Tur dal, also known as toor dal, arhar dal, or pigeon pea
                  (Cajanus cajan), is a staple split legume widely used in
                  Indian cuisine. It is valued for its versatility in dishes
                  like dal tadka, sambar, and khichdi, offering a nutty flavor
                  and quick cooking time.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 bg-cream/50 p-6 rounded-2xl border border-cream/20">
                  <h3 className="text-xl font-semibold text-forest flex items-center gap-2 col-span-full">
                    <Leaf className="text-primary" size={20} /> Nutritional
                    Highlights
                  </h3>
                  <ul className="space-y-3 col-span-full sm:col-span-1">
                    <li className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                      <span>
                        <strong>Protein Rich:</strong> ~22% by weight, supports
                        muscle repair.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                      <span>
                        <strong>Fiber High:</strong> Promotes digestion and
                        heart health.
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-3 col-span-full sm:col-span-1">
                    <li className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                      <span>
                        <strong>Low GI:</strong> Aids diabetes management.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                      <span>
                        <strong>Vital Minerals:</strong> Iron, Magnesium,
                        Potassium.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                {/* Ayurveda Box */}
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Sun size={120} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-serif font-bold text-orange-800 mb-4 flex items-center gap-2">
                      <Sun size={24} /> Ayurvedic Perspective
                    </h3>
                    <div className="space-y-4 text-orange-900/80">
                      <p>
                        In Ayurveda, Tur dal is considered{" "}
                        <strong>light to digest</strong> and{" "}
                        <strong>astringent-sweet</strong> in taste.
                      </p>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="bg-white/60 p-3 rounded-xl">
                          <div className="font-semibold text-orange-700">
                            Taste
                          </div>
                          <div className="text-sm">Sweet-Astringent</div>
                        </div>
                        <div className="bg-white/60 p-3 rounded-xl">
                          <div className="font-semibold text-orange-700">
                            Dosha
                          </div>
                          <div className="text-sm">Balances Kapha/Pitta</div>
                        </div>
                        <div className="bg-white/60 p-3 rounded-xl">
                          <div className="font-semibold text-orange-700">
                            Benefit
                          </div>
                          <div className="text-sm">Liver Function</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-forest">
                <Settings className="text-primary" /> Manufacturing Process
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-4">
                {[
                  {
                    step: "Raw Material Reception",
                    desc: "Premium-quality tur dal is carefully received and verified.",
                  },
                  {
                    step: "Cleaning",
                    desc: "Dust, stones, and impurities are removed using advanced cleaning systems.",
                  },
                  {
                    step: "Dehusking",
                    desc: "The outer husk is gently removed to retain grain integrity.",
                  },
                  {
                    step: "Splitting",
                    desc: "Dal is uniformly split into clean halves.",
                  },
                  {
                    step: "Grading",
                    desc: "Size-based grading ensures consistency and quality.",
                  },
                  {
                    step: "Polishing (Optional)",
                    desc: "Natural polishing enhances appearance without affecting nutrition.",
                  },
                  {
                    step: "Quality Inspection",
                    desc: "Multiple quality checks ensure compliance with food safety standards.",
                  },
                  {
                    step: "Packaging",
                    desc: "Hygienic, food-grade packaging for freshness and long shelf life.",
                  },
                  {
                    step: "Storage",
                    desc: "Stored in controlled environments to maintain quality.",
                  },
                  {
                    step: "Dispatch",
                    desc: "Safely prepared for domestic and global export shipment.",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold text-sm leading-tight text-forest">
                        {item.step}
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground pl-10">
                      {item.desc}
                    </p>
                    {index < 9 && (
                      <div className="hidden lg:block absolute top-4 left-[90%] w-[40%] h-px bg-border -z-10"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-2 text-forest">
                  <div className="p-2 bg-cream rounded-lg">
                    {" "}
                    <Globe size={20} />{" "}
                  </div>
                  <h4 className="font-semibold">Global Production</h4>
                </div>
                <div className="text-3xl font-bold mb-1">
                  4.77 B{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    kg
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  In 2023. India leads with ~25% of global output.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-2 text-forest">
                  <div className="p-2 bg-cream rounded-lg">
                    {" "}
                    <TrendingUp size={20} />{" "}
                  </div>
                  <h4 className="font-semibold">Market Growth</h4>
                </div>
                <div className="text-3xl font-bold mb-1">
                  5-8%{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    CAGR
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Projected growth through 2030-2035.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-2 text-forest">
                  <div className="p-2 bg-cream rounded-lg">
                    {" "}
                    <Scale size={20} />{" "}
                  </div>
                  <h4 className="font-semibold">Top Exporters</h4>
                </div>
                <div className="text-sm space-y-1 mt-2">
                  <div className="flex justify-between">
                    <span>🇲🇲 Myanmar</span>{" "}
                    <span className="font-medium">45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🇹🇿 Tanzania</span>{" "}
                    <span className="font-medium">31%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🇮🇳 India</span>{" "}
                    <span className="font-medium">11%</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Brands */}
          <FadeIn>
            <div className="mb-24">
              <h3 className="text-2xl font-bold text-center mb-8">
                Our Premium Brands
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    name: "FGS - Meethi",
                    desc: "Premium Desi Tur",
                    color: "bg-yellow-100 text-yellow-800",
                    src: "/brands/Meethi.jpeg",
                  },
                  {
                    name: "FGS - Satyam",
                    desc: "Authentic Taste",
                    color: "bg-orange-100 text-orange-800",
                    src: "/brands/Satyam.jpeg",
                  },
                  {
                    name: "FGS - Gold Star",
                    desc: "Superior Quality",
                    color: "bg-amber-100 text-amber-800",
                    src: "/brands/Gold Star.jpeg",
                  },
                  {
                    name: "FGS - Silver Star",
                    desc: "Daily Essentials",
                    color: "bg-slate-100 text-slate-800",
                    src: "/brands/Silver Star.jpeg",
                  },
                ].map((brand) => (
                  <div key={brand.name} className="group cursor-pointer">
                    <div className="p-2 bg-primary rounded-3xl mb-4">
                      <div
                        className={`aspect-[9/16] rounded-2xl relative overflow-hidden ${brand.color} transition duration-300 group-hover:scale-[1.02]`}
                      >
                        <Image
                          src={brand.src}
                          alt={brand.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <h4 className="font-bold text-lg">{brand.name}</h4>
                    <p className="text-muted-foreground text-sm">
                      {brand.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px w-full bg-border container mx-auto" />

      {/* Kabuli Chana Section */}
      <section className="py-20 bg-cream/30" id="kabuli-chana">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1 relative">
                <div className="aspect-square rounded-3xl bg-[#FDF6E3] border border-[#EBE3C8] flex items-center justify-center relative overflow-hidden">
                  <div
                    className={`aspect-square rounded-2xl relative overflow-hidden w-full`}
                  >
                    <Image
                      src="/products/kabuli.png"
                      alt="Kabuli Chana"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 text-primary font-semibold">
                  <div className="h-px w-8 bg-primary"></div>
                  World Class Export
                </div>
                <h2 className="text-4xl font-bold text-forest">
                  Kabuli Chana (White Chickpeas)
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Known as white chickpeas or garbanzo beans, Kabuli Chana is a
                  larger, creamier variety distinguished by its smooth coat.
                  With a nutty, earthy flavor, it is ideal for dishes like chole
                  masala, hummus, and salads.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border border-border">
                    <div className="text-primary mb-2">
                      <Heart size={24} />
                    </div>
                    <div className="font-semibold text-forest">
                      Heart Healthy
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Lowers cholesterol & promotes satiety
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-border">
                    <div className="text-primary mb-2">
                      <TrendingDown size={24} />
                    </div>
                    <div className="font-semibold text-forest">Low GI</div>
                    <div className="text-xs text-muted-foreground">
                      GI (28-42) helps regulate blood sugar
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-border">
                    <div className="text-primary mb-2">
                      <Droplet size={24} />
                    </div>
                    <div className="font-semibold text-forest">Fiber Rich</div>
                    <div className="text-xs text-muted-foreground">
                      Over 12g fiber per cup
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-border">
                    <div className="text-primary mb-2">
                      <Award size={24} />
                    </div>
                    <div className="font-semibold text-forest">
                      Protein Packed
                    </div>
                    <div className="text-xs text-muted-foreground">
                      ~19g plant protein per cup
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-forest">
                <Settings className="text-primary" /> Manufacturing Process
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-4">
                {[
                  {
                    step: "Raw Material Reception",
                    desc: "Handpicked, premium-grade Kabuli chana sourced from trusted farms.",
                  },
                  {
                    step: "Cleaning",
                    desc: "Removal of dust, stones, and foreign matter.",
                  },
                  {
                    step: "Grading",
                    desc: "Size-based separation for uniformity.",
                  },
                  {
                    step: "Soaking (Optional)",
                    desc: "Optional soaking to improve texture and processing efficiency.",
                  },
                  {
                    step: "Drying",
                    desc: "Controlled drying to remove excess moisture.",
                  },
                  {
                    step: "Polishing (Optional)",
                    desc: "Optional polishing for a smooth, export-ready finish.",
                  },
                  {
                    step: "Quality Inspection",
                    desc: "Strict inspections ensure consistent quality and safety.",
                  },
                  {
                    step: "Packaging",
                    desc: "Packed hygienically in food-grade materials.",
                  },
                  {
                    step: "Storage",
                    desc: "Stored in moisture-controlled warehouses.",
                  },
                  {
                    step: "Dispatch",
                    desc: "Ready for worldwide export and distribution.",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold text-sm leading-tight text-forest">
                        {item.step}
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground pl-10">
                      {item.desc}
                    </p>
                    {index < 9 && (
                      <div className="hidden lg:block absolute top-4 left-[90%] w-[40%] h-px bg-border -z-10"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-forest text-cream rounded-3xl p-8 md:p-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Globe size={300} strokeWidth={0.5} />
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Globe className="text-primary" /> Global Impact & Statistics
                </h3>

                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      17.5 M
                    </div>
                    <div className="font-medium text-lg mb-1">
                      Global Production (Tons)
                    </div>
                    <div className="text-sm text-cream/60">
                      Increased 5.8% in 2024
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      65-90%
                    </div>
                    <div className="font-medium text-lg mb-1">
                      India's Share
                    </div>
                    <div className="text-sm text-cream/60">
                      Dominates world supply
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      $15.8 B
                    </div>
                    <div className="font-medium text-lg mb-1">Market Value</div>
                    <div className="text-sm text-cream/60">
                      Growing at 6.6% CAGR
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      #3
                    </div>
                    <div className="font-medium text-lg mb-1">Global Rank</div>
                    <div className="text-sm text-cream/60">
                      India's rank in exports
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
