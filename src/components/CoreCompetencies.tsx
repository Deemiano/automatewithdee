import { CheckCircle2 } from "lucide-react";

const CoreCompetencies = () => {
  const competencies = [
    "Workflow Automation Architecture",
    "AI Integration & Prompt Engineering",
    "CRM Setup & Optimization",
    "Project Management Systems",
    "Data Analytics & Reporting",
    "Process Documentation & SOPs",
    "System Integration & API Management",
    "Team Training & Onboarding",
  ];

  return (
    <section id="competencies" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Core Competencies</h2>
        </div>

        <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-medium p-8 lg:p-12">
          <div className="grid sm:grid-cols-2 gap-6">
            {competencies.map((competency, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                <span className="text-foreground font-medium">{competency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;
