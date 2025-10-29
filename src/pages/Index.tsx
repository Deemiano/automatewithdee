import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CoreCompetencies from "@/components/CoreCompetencies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  useEffect(() => {
    // Add JSON-LD structured data for SEO
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Dennis Muchiri",
      alternateName: "Dee Muchiri",
      jobTitle: "Tech Virtual Assistant",
      description:
        "Tech Virtual Assistant specializing in AI, automation, and workflow optimization. Helping founders, executives, and teams streamline operations.",
      url: window.location.origin,
      email: "dennismuchirim@gmail.com",
      sameAs: ["https://www.linkedin.com/in/dennismuchirim"],
      knowsAbout: [
        "Artificial Intelligence",
        "Workflow Automation",
        "Process Optimization",
        "CRM Management",
        "Virtual Assistant Services",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Professional Services",
        email: "dennismuchirim@gmail.com",
        url: "https://calendly.com/dennismuchirim",
      },
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Tools />
        <Packages />
        <Portfolio />
        <Testimonials />
        <CoreCompetencies />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
