import { Brain, Link2, Database, FileCheck, MessageSquare, FileSpreadsheet, Globe, Calendar, Video, Lock, Palette, Share2, Mail, FileText } from "lucide-react";

const Tools = () => {
  const tools = [
    {
      name: "ChatGPT & AI Tools",
      icon: Brain,
      description: "Custom AI automations, prompt engineering, intelligent assistants",
    },
    {
      name: "Zapier",
      icon: Link2,
      description: "Workflow automation, app integrations, trigger-based actions",
    },
    {
      name: "Make (Integromat)",
      icon: Link2,
      description: "Complex automation scenarios, visual workflow builder",
    },
    {
      name: "Power Automate",
      icon: Link2,
      description: "Microsoft 365 automation, enterprise workflows",
    },
    {
      name: "HubSpot",
      icon: Database,
      description: "CRM automation, marketing workflows, sales pipeline management",
    },
    {
      name: "Airtable",
      icon: Database,
      description: "Database management, custom apps, automated workflows",
    },
    {
      name: "Google Sheets",
      icon: FileSpreadsheet,
      description: "Data automation, reporting dashboards, formula-based workflows",
    },
    {
      name: "Notion",
      icon: FileCheck,
      description: "Knowledge management, wikis, project documentation",
    },
    {
      name: "Trello",
      icon: FileCheck,
      description: "Visual task management, kanban boards, team collaboration",
    },
    {
      name: "ClickUp",
      icon: FileCheck,
      description: "All-in-one project management, custom workflows, time tracking",
    },
    {
      name: "Asana",
      icon: FileCheck,
      description: "Task management, project planning, team coordination",
    },
    {
      name: "Slack",
      icon: MessageSquare,
      description: "Team communication, workflow notifications, bot integrations",
    },
    {
      name: "Google Workspace",
      icon: Mail,
      description: "Email, docs, collaboration, admin management",
    },
    {
      name: "Microsoft 365",
      icon: FileSpreadsheet,
      description: "Office apps, SharePoint, Teams integration",
    },
    {
      name: "Calendly",
      icon: Calendar,
      description: "Automated scheduling, booking workflows, calendar sync",
    },
    {
      name: "Zoom",
      icon: Video,
      description: "Video meetings, webinars, recording automation",
    },
    {
      name: "Microsoft Teams",
      icon: Video,
      description: "Enterprise video calls, chat, file sharing",
    },
    {
      name: "LastPass / 1Password",
      icon: Lock,
      description: "Password management, team credential sharing",
    },
    {
      name: "Formspree",
      icon: Mail,
      description: "Form handling, email notifications, data collection",
    },
    {
      name: "Buffer",
      icon: Share2,
      description: "Social media scheduling, content calendar, analytics",
    },
    {
      name: "Canva",
      icon: Palette,
      description: "Graphic design, social media assets, presentations",
    },
    {
      name: "Meta Suite",
      icon: Share2,
      description: "Facebook & Instagram management, ad campaigns",
    },
    {
      name: "APIs & Integrations",
      icon: Globe,
      description: "Custom integrations, webhook management, data sync",
    },
    {
      name: "Domain & DNS Tools",
      icon: Globe,
      description: "Domain management, DNS configuration, hosting setup",
    },
  ];

  return (
    <section id="tools" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Tools & Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leveraging the best tools to deliver powerful automation and seamless workflows
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-5 hover:shadow-medium hover:border-accent/30 transition-all group"
            >
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <tool.icon className="text-accent" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm text-primary mb-1.5">{tool.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            And many more tools customized to your specific needs...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tools;