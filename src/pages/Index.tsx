import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import DependableServices from "@/components/DependableServices";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <DependableServices />
      <Projects />
      <CTA />
      <Testimonials />
      <FAQ />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
