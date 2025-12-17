"use client";

import {
  Mail,
  MapPin,
  Phone,
  Users,
  Calendar,
  Award,
  Globe,
  ShieldCheck,
  Zap,
  Heart,
  Leaf,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import farmersTeam from "@/assets/farmers-team.jpg";
import heroImage from "@/assets/hero-farm.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, Variants } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

export default function ContactPage() {
  const stats = [
    { value: "15+", label: "Years Experience", icon: Calendar },
    { value: "500+", label: "Projects Completed", icon: Award },
    { value: "50+", label: "Team Members", icon: Users },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Uncompromising Quality",
      desc: "Rigorous testing and grading to ensure premium standards.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      desc: "Eco-friendly practices from farm to packaging.",
    },
    {
      icon: Zap,
      title: "Innovation",
      desc: "State-of-the-art processing technology for purity.",
    },
    {
      icon: Heart,
      title: "Integrity",
      desc: "Honest partnerships and transparent business dealings.",
    },
  ];

  const faqs = [
    {
      q: "Do you offer international shipping?",
      a: "Yes, we export our premium grains and spices to over 20 countries worldwide, handling all logistics and documentation.",
    },
    {
      q: "Are your products certified organic?",
      a: "Absolutely. We hold multiple certifications including USDA Organic, EU Organic, and FSSAI, ensuring 100% natural products.",
    },
    {
      q: "What is your minimum order quantity for bulk?",
      a: "Our MOQs vary by product but are generally flexible for our B2B partners. Contact our sales team for a custom quote.",
    },
    {
      q: "Do you provide private labeling?",
      a: "Yes, we offer comprehensive private labeling services for global brands, including custom packaging design.",
    },
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <Image
            src={heroImage}
            alt="FGS Farm"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white pt-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              About Us
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            >
              Leading the way in quality grain processing and sustainable
              farming since 1984.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  About Us
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                  Excellence in Grain Processing for Over 40 Years
                </h1>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  Fresh Grain & Spices Pvt. Ltd. (FGS), the renowned
                  Indore-based company, has been associated with premium quality
                  dals and chickpeas which is enriched with proteins and
                  nutrients. FGS has been consistently manufacturing and
                  supplying quality products in India and abroad.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  From a humble beginning with a hand mill, the company has come
                  a long way in more than four decades of journey. In 2024, the
                  brand came up with first of its kind fully automated Toor and
                  Kabuli Chana plants.
                </p>

                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-white rounded-xl shadow-sm border border-border"
                    >
                      <stat.icon className="w-8 h-8 text-primary mx-auto mb-2 opacity-80" />
                      <div className="text-2xl md:text-3xl font-bold text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                  <Image
                    src={farmersTeam}
                    alt="Our farming team"
                    fill
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-3xl">
                      🌿
                    </div>
                    <div>
                      <div className="font-bold text-xl text-foreground">
                        100% Organic
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Certified sustainable farming
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-forest text-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                The principles that guide every grain we process.
              </p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors"
                >
                  <val.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                  <p className="text-sm text-white/70">{val.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-24 bg-cream/30 relative overflow-hidden">
        {/* Abstract map background placeholder */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Globe className="w-[800px] h-[800px] absolute -right-40 top-1/2 -translate-y-1/2 text-forest" />
        </div>
        <div className="container mx-auto px-4 relative">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-6">
                  <Globe size={14} /> Global Presence
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-forest mb-6">
                  Bringing Quality to the World
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  We proudly export to over 20 countries, bridging the gap
                  between Indian farms and global dining tables. Our logistics
                  network ensures timely and safe delivery, anywhere.
                </p>
                {/* <Button className="bg-forest text-white hover:bg-forest/90">
                View Export Destinations
              </Button> */}
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-border">
                  <div className="text-4xl font-bold text-primary mb-1">
                    20+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Countries Served
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-border mt-8">
                  <div className="text-4xl font-bold text-primary mb-1">
                    10k+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Happy Clients
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-border">
                  <div className="text-4xl font-bold text-primary mb-1">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    On-Time Delivery
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-forest mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Common queries about our products and export process.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium text-forest hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground text-lg">
                Have a question or want to discuss a partnership? We'd love to
                hear from you.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
              {/* Contact Info */}
              <div className="space-y-10">
                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Our Head Office
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      123 Industrial Area, Phase 2,
                      <br />
                      Nagpur, Maharashtra 440001, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Phone className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Phone & Support
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      +91 98765 43210
                    </p>
                    <p className="text-muted-foreground text-lg">
                      +91 12345 67890
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Mail className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Email Us
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      info@freshgrainspices.com
                    </p>
                    <p className="text-muted-foreground text-lg">
                      sales@freshgrainspices.com
                    </p>
                  </div>
                </div>

                {/* Map */}
                <div className="w-full h-80 bg-muted rounded-3xl overflow-hidden shadow-lg border border-border mt-8">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.660682006764!2d79.0881543149345!3d21.14580098593506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b32753b7b0969!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1645523456789!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  ></iframe>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-border/50 sticky top-24 h-fit">
                <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="h-12 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-foreground"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        placeholder="+91..."
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Inquiry about product..."
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      className="min-h-[160px] rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-lg py-6 rounded-xl mt-4"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
