import aboutBg from "@/assets/about-bg.webp";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Award,
  TrendingUp,
} from "lucide-react";

const About = () => {
  const handleContactClick = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handlePackagesClick = () => {
    const packagesSection = document.querySelector("#packages");
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="about" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background layer */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `url(${aboutBg})`,
          filter: "blur(5px) brightness(1.05)",
        }}
      ></div>
      <div className="absolute inset-0 -z-10 bg-black/25 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Combined title + card (seamless look) */}
          <div className="bg-card/90 backdrop-blur-md rounded-2xl shadow-medium border border-border overflow-hidden">
            
            {/* Tab Header */}
            <div className="flex justify-center bg-card/90 border-b border-border py-4 rounded-t-2xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-primary tracking-wide">
                About Me
              </h2>
            </div>

            {/* Main Bio Content */}
            <div className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground mb-6">
                  I'm a certified <strong>Tech Virtual Assistant</strong> with real-world
                  experience in AI, automation, and workflow optimization.
                  With a Bachelor's in Computer Science and multiple certifications
                  in AI, data analysis, and operations systems, I bring both
                  technical expertise and strategic thinking to every project.
                </p>

                <p className="text-foreground mb-8">
                  My mission is simple — help businesses work smarter, not harder.
                  Whether you're a founder overwhelmed by daily tasks, an executive
                  seeking operational systems, or a team scaling fast, I design
                  automation strategies that save time and boost efficiency — so you
                  can focus on growth.
                </p>

                <blockquote className="border-l-4 border-accent pl-6 my-8 italic text-lg text-primary">
                  “I help businesses eliminate manual work, integrate smart automations,
                  and reclaim valuable hours with custom workflows and cutting-edge tech.”
                </blockquote>

                <div className="grid sm:grid-cols-2 gap-4 my-8">
                  {[
                    "Rapid onboarding with proven frameworks",
                    "Measurable ROI tracking and reporting",
                    "Privacy-first practices and confidentiality",
                    "Proactive problem-solving mindset",
                  ].map((text, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-foreground">{text}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button variant="accent" onClick={handlePackagesClick}>
                    View Packages
                    <ArrowRight size={20} />
                  </Button>
                  <Button variant="outline" onClick={handleContactClick}>
                    Get In Touch
                  </Button>
                </div>
              </div>
            </div>

            {/* Divider line between sections */}
            <div className="border-t border-border mx-8"></div>

            {/* Education & Credentials */}
            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Education */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="text-accent" size={24} />
                    <h3 className="text-xl font-bold text-primary">Education</h3>
                  </div>
                  <p className="text-foreground">Bachelor's in Computer Science</p>
                </div>

                {/* Certifications */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="text-accent" size={24} />
                    <h3 className="text-xl font-bold text-primary">Certified</h3>
                  </div>
                  <ul className="space-y-2 text-foreground">
                    <li>• AI Prompt Engineering</li>
                    <li>• Automations</li>
                    <li>• Data Analysis</li>
                    <li>• Workflow Management</li>
                    <li>• Tech Virtual Assistant</li>
                  </ul>
                </div>

                {/* Mission */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="text-accent" size={24} />
                    <h3 className="text-xl font-bold text-primary">Mission</h3>
                  </div>
                  <p className="text-foreground">
                    Staying current with emerging technologies and best practices
                    through continuous learning and experimentation in AI,
                    automation, and business systems.
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="mt-8 text-center">
                <Button variant="accent" size="lg" onClick={handleContactClick}>
                  Let's Connect
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
