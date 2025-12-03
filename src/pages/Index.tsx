import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import Projects from "@/components/Projects";
import DependableServices from "@/components/DependableServices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Technology />
      <Projects />
      <DependableServices />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
