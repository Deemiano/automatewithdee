import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import packagesBg from "@/assets/packages-bg.png";

const Packages = () => {
  const packages = [
    {
      name: "Starter",
      hours: "10 hours/month",
      subtitle: "Lite Support",
      description:
        "Essential automations and admin tasks; best for solo founders starting automation.",
      features: [
        "10 hours of dedicated support monthly",
        "Basic workflow automation setup",
        "Email & calendar management",
        "Simple CRM or project tool setup",
        "Monthly check-in call",
        "Email support (24hr response time)",
      ],
      cta: "Book Starter Discovery",
      popular: false,
    },
    {
      name: "Growth",
      hours: "20 hours/month",
      subtitle: "Automation & Admin Relief",
      description:
        "Regular automations, recurring tasks, monthly check-ins.",
      features: [
        "20 hours of dedicated support monthly",
        "Advanced automation implementation",
        "Multiple platform integrations",
        "Regular workflow optimization",
        "Bi-weekly strategy calls",
        "Priority email & Slack support",
        "Custom reporting dashboards",
        "SOP documentation",
      ],
      cta: "Book Growth Discovery",
      popular: true,
    },
    {
      name: "Elite",
      hours: "Full-time",
      subtitle: "Dedicated Tech VA",
      description:
        "Dedicated support, daily touchpoints, ongoing AI/automation optimization.",
      features: [
        "Full-time dedicated support",
        "Complete automation infrastructure",
        "Daily status updates & touchpoints",
        "Proactive system monitoring",
        "Unlimited integrations & workflows",
        "24/7 priority support",
        "Quarterly strategy & optimization reviews",
        "Team training & onboarding",
        "Custom AI implementation",
      ],
      cta: "Let's Discuss Your Vision",
      popular: false,
    },
  ];

  return (
    <section id="packages" className="relative py-16 lg:py-24">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: `url(${packagesBg})`,
          filter: "blur(5px) brightness(1.1)",
        }}
      ></div>

      {/* Overlay tint for better readability */}
      <div className="absolute inset-0 -z-10 bg-black/25 backdrop-blur-[2px]"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Packages & Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your needs — or let’s customize one together
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`flex transition-transform duration-500 ${
                pkg.popular
                  ? "lg:scale-[1.07] lg:-translate-y-2 z-10"
                  : "lg:scale-100 lg:translate-y-0 opacity-90"
              }`}
            >
              <Card
                className={`relative w-full transition-all duration-500 ${
                  pkg.popular
                    ? "border-accent border-2 shadow-glow bg-gradient-to-b from-accent/20 via-background/95 to-background/85 backdrop-blur-md"
                    : "border-border bg-card/90 backdrop-blur hover:scale-[1.02]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-md animate-pulse">
                    Most Popular
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-accent mb-1">
                    {pkg.hours}
                  </div>
                  <CardDescription className="text-sm font-medium">
                    {pkg.subtitle}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">
                    {pkg.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check
                          className="text-accent flex-shrink-0 mt-0.5"
                          size={18}
                        />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={pkg.popular ? "accent" : "outline"}
                    className="w-full"
                    onClick={() =>
                      window.open("https://calendly.com/dennismuchirim", "_blank")
                    }
                  >
                    {pkg.cta}
                    <ArrowRight size={18} />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Package Details */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-card/90 backdrop-blur-lg rounded-xl p-8 shadow-medium">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">
              Package Details
            </h3>
            <p className="text-center text-foreground mb-6">
              <strong>All packages customizable:</strong> Not sure which fits? Book a free
              discovery call to discuss your specific needs.
            </p>

            <div className="space-y-3 text-foreground">
              <ul className="space-y-2 ml-4">
                <li>
                  <strong>Billing:</strong> Monthly retainer, billed at the beginning of
                  each month
                </li>
                <li>
                  <strong>Onboarding:</strong> 1–2 week discovery period to understand your
                  systems and needs
                </li>
                <li>
                  <strong>Cancellation:</strong> 30-day notice required
                </li>
                <li>
                  <strong>Privacy:</strong> All work covered by strict confidentiality
                  agreement
                </li>
              </ul>
            </div>

            <div className="mt-8 text-center">
              <Button
                variant="accent"
                size="lg"
                onClick={() =>
                  window.open("https://calendly.com/dennismuchirim", "_blank")
                }
              >
                Book a Free Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
