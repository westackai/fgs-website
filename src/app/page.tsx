import Image from "next/image";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Trademarks from "@/components/home/Trademarks";
import Registrations from "@/components/home/Registrations";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import FadeIn from "@/components/animations/FadeIn";

export default function Home() {
  return (
    <>
      <Hero />
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Services />
      </FadeIn>
      {/* <Projects /> */}
      <FadeIn>
        <Testimonials />
      </FadeIn>
      <FadeIn>
        <Registrations />
      </FadeIn>
      <FadeIn>
        <CTA />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
      <FadeIn>
        <Trademarks />
      </FadeIn>
    </>
  );
}
