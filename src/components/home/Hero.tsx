"use client";

import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm.jpg";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  const stats = [
    { icon: "🌱", label: "Organic Certified" },
    { icon: "🚜", label: "Modern Equipment" },
    { icon: "👨‍🌾", label: "Expert Farmers" },
    { icon: "🌍", label: "Eco Friendly" },
  ];

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
    <section className="relative min-h-screen flex items-center pt-24 md:pt-16 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage.src})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />
      <div className="absolute inset-0 hero-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-2xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-4 py-1.5 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6"
          >
            🌾 Premium Quality Pulses Processing
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Empowering Indian Agriculture with High-Quality Pulses
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-primary-foreground/80 mb-8"
          >
            Fresh Grain and Spices delivers excellence in pulse processing,
            ensuring the finest quality for every grain that reaches your plate.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
            >
              Get Started <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 gap-2"
            >
              <Play size={18} /> Watch Video
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <span className="text-xl">{stat.icon}</span>
                <span className="text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
