import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TrendingUp, Clock, DollarSign, ChevronUp, CheckCircle } from "lucide-react";

import emailWorkflowImage from "@/assets/email-workflow-automation.png";
import aiSupportImage from "@/assets/ai-bot-automation.png";
import calendarInboxImage from "@/assets/calendar-inbox-management.png";
import clientOnboardingImage from "@/assets/airtable-slack-typeform.png";

const Portfolio = () => {
  const [openImage, setOpenImage] = useState<number | null>(null);

  const caseStudies = [
    {
      title: "Email Workflow Automation",
      tags: ["Zapier", "Gmail", "Notion", "Google Sheets", "Trello", "Slack"],
      challenge:
        "A client's team manually tracked incoming emails, logged data into multiple tools, and notified team members — a repetitive process that led to delays and missed updates.",
      solution:
        "Designed and implemented an automated workflow where each new Gmail email triggers actions in Zapier to create or update a Notion page, append details to Google Sheets, create a Trello card, and notify the team instantly in Slack.",
      result: {
        icon: TrendingUp,
        text: "Streamlined communication and eliminated manual logging",
        metric: "90% reduction in administrative effort",
      },
      image: emailWorkflowImage,
    },
    {
      title: "AI Customer Support Automation",
      tags: ["SwiftReply", "ChatGPT API", "Make", "HubSpot", "Notion"],
      challenge:
        "An e-commerce client handled 200+ daily customer inquiries manually, resulting in 24-hour response delays and reduced satisfaction scores.",
      solution:
        "Built and integrated an AI-powered support system using SwiftReply, connecting the company's chat interface, HubSpot CRM, and knowledge base via Make. The workflow automated 85% of inquiries — handling order tracking, FAQs, and delivery updates instantly while escalating complex cases to human agents and syncing conversation logs for insight tracking.",
      result: {
        icon: TrendingUp,
        text: "99% faster response time",
        metric: "24 hours → under 2 minutes | 87% automation rate | 91% CSAT",
      },
      image: aiSupportImage,
    },
    {
      title: "CRM Pipeline Optimization",
      tags: ["HubSpot", "Airtable", "Power Automate"],
      challenge:
        "Sales team manually updating leads across three platforms, causing data inconsistencies and lost opportunities.",
      solution:
        "Centralized lead capture in HubSpot with automated enrichment, scoring, and cross-platform sync using Power Automate.",
      result: {
        icon: DollarSign,
        text: "25% increase in conversion rate",
        metric: "Zero data entry errors",
      },
    },
    {
      title: "Executive Calendar & Inbox Management",
      tags: ["Asana", "Calendly", "Zapier"],
      challenge:
        "Executive receiving 150+ emails daily with constant scheduling conflicts and missed priorities.",
      solution:
        "Implemented an automated email filtering system, integrated Calendly for seamless meeting scheduling, and created a priority tagging workflow using Asana & Zapier.",
      result: {
        icon: CheckCircle,
        text: "Inbox Zero Achieved",
        metric: "5 hours saved weekly",
      },
      image: calendarInboxImage,
    },
    {
      title: "Client Onboarding Automation",
tags: ["Typeform", "Airtable", "Slack"],
challenge:
"Agency manually onboarding 10+ clients monthly with inconsistent processes and 3-day turnaround.",
solution:
"Designed automated onboarding workflow where a completed Typeform triggers project setup, team notifications, and welcome sequences in Airtable and Slack.",
result: {
icon: TrendingUp,
text: "🚀 Same-day onboarding achieved",
metric: "✅ 100% process consistency",
},
image: clientOnboardingImage,
    },
    {
      title: "Social Media Workflow System",
      tags: ["Buffer", "Canva", "Notion"],
      challenge:
        "Marketing team spending hours daily on social scheduling with no content calendar visibility.",
      solution:
        "Built Notion content hub with Canva templates and Buffer integration for automated multi-platform scheduling.",
      result: {
        icon: Clock,
        text: "70% faster content publishing",
        metric: "30-day content calendar",
      },
    },
  ];

  return (
    <section id="portfolio" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses — see how automation transforms operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Card key={index} className="hover:shadow-medium transition-shadow">
              {study.image && (
                <Dialog
                  open={openImage === index}
                  onOpenChange={(open) => setOpenImage(open ? index : null)}
                >
                  <DialogTrigger asChild>
                    <div className="cursor-pointer overflow-hidden rounded-t-lg group relative">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-white/80 text-xs text-foreground px-2 py-1 rounded-full shadow-sm group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        <span>Click to expand</span>
                        <ChevronUp size={14} className="animate-bounce" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl w-full">
                    <img src={study.image} alt={study.title} className="w-full h-auto" />
                  </DialogContent>
                </Dialog>
              )}

              <CardHeader>
                <CardTitle className="text-xl mb-2">{study.title}</CardTitle>

                <div className="flex flex-wrap gap-2 mb-3">
                  {study.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <CardDescription className="text-sm">
                  <span className="font-semibold text-foreground">Challenge: </span>
                  {study.challenge}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-semibold text-foreground">Solution: </span>
                    {study.solution}
                  </p>

                  <div className="bg-emerald-50 rounded-lg p-4 border-l-4 border-emerald-400">
                    <div className="flex items-start gap-2">
                      <study.result.icon
                        className="text-emerald-500 flex-shrink-0 mt-0.5"
                        size={20}
                      />
                      <div>
                        <p className="font-semibold text-sm text-emerald-700">{study.result.text}</p>
                        <p className="text-xs text-emerald-600 mt-1">{study.result.metric}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            All case studies use anonymized data to protect client confidentiality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
