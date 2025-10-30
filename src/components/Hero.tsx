import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Zap, Bot, Clock, ChevronDown } from "lucide-react";
import heroImage from "@/assets/dennis-hero.webp";

const Hero = () => {
  const handleWorkWithMe = () => {
    const packagesSection = document.querySelector("#packages");
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Dennis Muchiri
            </h1>
            <p className="text-xl lg:text-2xl text-accent font-semibold mb-4">
              Tech Virtual Assistant | AI • Automation • Workflow Optimization
            </p>
            <p className="text-lg lg:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Helping Founders, Executives, & Teams Streamline Operations, Save Time & Scale Smarter
            </p>


            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" onClick={handleWorkWithMe}>
                Work With Me
                <ArrowRight size={20} />
              </Button>
              <Button
                variant="accent"
                size="lg"
                className="shadow-glow hover:shadow-strong transition-all"
                onClick={() => window.open("https://calendly.com/dennismuchirim", "_blank")}
              >
                <Calendar size={20} />
                Book a Free Discovery Call
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/70 mt-4">
              Free 20–30 minute discovery call. No obligation.
            </p>

            {/* Value Bullets with Descriptions */}
            <div className="grid sm:grid-cols-3 gap-6 mt-12 text-left">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary-foreground font-semibold">
                  <Zap className="text-accent" size={24} />
                  <span>Automate repetitive work</span>
                </div>
                <p className="text-sm text-primary-foreground/80 ml-8">
                  Eliminate manual tasks with smart automation
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary-foreground font-semibold">
                  <Bot className="text-accent" size={24} />
                  <span>Build AI assistants & automations</span>
                </div>
                <p className="text-sm text-primary-foreground/80 ml-8">
                  Custom AI tools tailored to your workflow
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary-foreground font-semibold">
                  <Clock className="text-accent" size={24} />
                  <span>Reclaim hours weekly</span>
                </div>
                <p className="text-sm text-primary-foreground/80 ml-8">
                  Focus on what matters most
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-3xl"></div>
              <img
                src={heroImage}
                alt="Dennis Muchiri — Tech Virtual Assistant professional headshot"
                className="relative rounded-2xl shadow-strong w-full max-w-md lg:max-w-lg object-cover aspect-square"
              />
              {/* Bouncing greeting bubble */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-strong animate-bounce">
                <span className="text-sm font-semibold">Hi, I'm Dennis 👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-12 animate-bounce">
        <button
          onClick={() => {
            const aboutSection = document.querySelector("#about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          className="flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer"
          aria-label="Scroll to About section"
        >
          <span className="text-sm">Scroll to explore</span>
          <div className="p-2 rounded-full border-2 border-primary-foreground/30">
            <ChevronDown size={24} />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
