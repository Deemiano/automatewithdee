import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Workflow,
  Bot,
  Database,
  BarChart3,
  Search,
  FileText,
  Globe,
  Mail,
  Calendar,
  FolderKanban,
  FileSpreadsheet,
  Users,
  Plane,
  Settings,
} from "lucide-react";

const Services = () => {
  const techServices = [
    {
      icon: Workflow,
      title: "Workflow Automation & Integration",
      description:
        "Automate routine workflows across apps to cut manual tasks and reduce errors using Zapier, Make, and Power Automate.",
      tools: "Zapier, Make, Power Automate",
      outcome: "Reduce repetitive tasks by 60-80%",
      whoFor: "Founders & teams spending 10+ hours/week on repetitive tasks",
    },
    {
      icon: Bot,
      title: "AI-Powered Tools Implementation",
      description:
        "Deploy and customize AI for internal ops and client-facing workflows with ChatGPT and custom AI automations.",
      tools: "ChatGPT, custom AI automations, virtual assistant bots",
      outcome: "Instant response times & 24/7 availability",
      whoFor: "Businesses wanting to leverage AI for customer support & internal operations",
    },
    {
      icon: Database,
      title: "CRM Setup & Optimization",
      description:
        "Streamline lead capture, pipeline tracking, and reporting with HubSpot, Airtable, and Google Sheets integrations.",
      tools: "HubSpot, Airtable, Google Sheets",
      outcome: "Centralized customer data & automated reporting",
      whoFor: "Sales teams struggling with scattered customer data & manual follow-ups",
    },
    {
      icon: BarChart3,
      title: "Data & Reporting Dashboards",
      description:
        "Consolidated dashboards for one-click reports using Notion, Airtable, and Google Data Studio.",
      tools: "Notion, Airtable, Google Data Studio",
      outcome: "Real-time insights at your fingertips",
      whoFor: "Leaders needing clear visibility into business metrics without manual reporting",
    },
    {
      icon: Search,
      title: "Systems Analysis & Bottleneck Removal",
      description:
        "Process audits, gap analysis, and prioritized roadmap for automation to identify and fix operational inefficiencies.",
      tools: "Custom process mapping & analysis",
      outcome: "15-30% efficiency improvements",
      whoFor: "Growing companies experiencing operational slowdowns & unclear processes",
    },
    {
      icon: FileText,
      title: "SOP Creation",
      description:
        "Documented repeatable processes that are handover-ready, ensuring consistency and scalability.",
      tools: "Notion, Google Docs, Process Street",
      outcome: "Streamlined onboarding & knowledge transfer",
      whoFor: "Teams scaling up & needing to document processes for consistency",
    },
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Basic landing pages, forms, embed widgets (Calendly, chatbots), and lightweight micro-sites for campaigns.",
      tools: "Webflow, WordPress, custom HTML/CSS",
      outcome: "Professional web presence in days, not weeks",
      whoFor: "Startups & small businesses needing quick, professional landing pages",
    },
  ];

  const adminServices = [
    {
      icon: Mail,
      title: "Inbox & Calendar Mastery",
      description:
        "Prioritize, triage, and manage calendars with automations including scheduling links, email templates, and follow-ups.",
      tools: "Gmail, Outlook, Calendly, scheduling automations",
      outcome: "Zero inbox & optimized schedule",
      whoFor: "Executives drowning in emails & double-booked calendars",
    },
    {
      icon: FolderKanban,
      title: "Project & Task Management",
      description:
        "Build boards, recurring tasks, automations and reporting in ClickUp, Trello, Asana, and Notion.",
      tools: "ClickUp, Trello, Asana, Notion",
      outcome: "Complete project visibility & accountability",
      whoFor: "Project managers juggling multiple initiatives without clear tracking",
    },
    {
      icon: FileSpreadsheet,
      title: "Data Entry, Research & Document Management",
      description:
        "Clean data flows, templates, and version control for organized information management.",
      tools: "Excel, Google Sheets, Airtable",
      outcome: "Accurate, organized data ready for decision-making",
      whoFor: "Teams dealing with messy spreadsheets & scattered documentation",
    },
    {
      icon: Users,
      title: "Online Client Onboarding",
      description:
        "Form-based intake, scheduler setup, and automated checklists for seamless client onboarding experiences.",
      tools: "Typeform, JotForm, automated workflows",
      outcome: "Professional first impressions, every time",
      whoFor: "Service providers wanting to wow clients from day one",
    },
    {
      icon: Plane,
      title: "Travel Logistics & Event Planning",
      description:
        "End-to-end coordination for business travel and events with detailed itineraries and vendor management.",
      tools: "TripIt, Google Calendar, vendor coordination",
      outcome: "Stress-free travel & events",
      whoFor: "Busy professionals who travel frequently for business",
    },
    {
      icon: Settings,
      title: "System Setup & Configuration",
      description:
        "Deep templates and configuration for ClickUp, Asana, Trello, Airtable, and Notion with starter templates.",
      tools: "Platform-specific templates & best practices",
      outcome: "Production-ready systems from day one",
      whoFor: "Teams switching tools or starting fresh with project management systems",
    },
  ];

  const scrollToPortfolio = () => {
    const portfolioSection = document.querySelector("#portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to automate your business and reclaim your time
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Tech & Automation Solutions */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Tech & Automation Solutions</h3>
            <div className="space-y-4">
              {techServices.map((service, index) => (
                <Card key={index} className="hover:shadow-medium transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <service.icon className="text-accent" size={24} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{service.title}</CardTitle>
                        <CardDescription className="text-sm">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold">Who it's for:</span> {service.whoFor}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold">Tools:</span> {service.tools}
                      </p>
                      <p className="text-xs text-accent font-medium">
                        ✓ {service.outcome}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs h-8"
                        onClick={scrollToPortfolio}
                      >
                        See example workflow →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* General Administrative Support */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">General Administrative Support</h3>
            <div className="space-y-4">
              {adminServices.map((service, index) => (
                <Card key={index} className="hover:shadow-medium transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <service.icon className="text-accent" size={24} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{service.title}</CardTitle>
                        <CardDescription className="text-sm">{service.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold">Who it's for:</span> {service.whoFor}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        <span className="font-semibold">Tools:</span> {service.tools}
                      </p>
                      <p className="text-xs text-accent font-medium">
                        ✓ {service.outcome}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs h-8"
                        onClick={scrollToPortfolio}
                      >
                        See example workflow →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
