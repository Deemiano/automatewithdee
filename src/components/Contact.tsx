import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Calendar } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company must be less than 100 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
  preferredTimes: z.string().trim().max(200, "Preferred times must be less than 200 characters").optional(),
  consent: z.boolean().refine((val) => val === true, "You must agree to continue"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    preferredTimes: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      
      // Create mailto link with sanitized data
      const subject = encodeURIComponent(`Contact from ${formData.name}${formData.company ? ` - ${formData.company}` : ''}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n${formData.company ? `Company: ${formData.company}\n` : ''}${formData.preferredTimes ? `Preferred Times: ${formData.preferredTimes}\n` : ''}\n\nMessage:\n${formData.message}`
      );
      
      window.location.href = `mailto:dennismuchirim@gmail.com?subject=${subject}&body=${body}`;
      
      toast({
        title: "Opening your email client...",
        description: "Your message is ready to send!",
      });
      
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        preferredTimes: "",
        consent: false,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.issues[0];
        toast({
          title: "Validation Error",
          description: firstError.message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Let's Build Smarter Systems Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to streamline your operations? Let's talk about your needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    required
                    maxLength={100}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@company.com"
                    required
                    maxLength={255}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company name"
                    maxLength={100}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Brief Description of Needs *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your automation needs and goals..."
                    required
                    rows={5}
                    maxLength={1000}
                  />
                  <p className="text-xs text-muted-foreground">{formData.message.length}/1000</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredTimes">Preferred Times for Call (Optional)</Label>
                  <Input
                    id="preferredTimes"
                    value={formData.preferredTimes}
                    onChange={(e) => setFormData({ ...formData, preferredTimes: e.target.value })}
                    placeholder="e.g., Weekday mornings EST"
                    maxLength={200}
                  />
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, consent: checked as boolean })
                    }
                    required
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm text-muted-foreground leading-tight cursor-pointer"
                  >
                    I agree to be contacted regarding my inquiry and understand my information will be handled
                    according to standard privacy practices.
                  </label>
                </div>

                <Button type="submit" variant="accent" className="w-full" size="lg">
                  Send Message
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Response time: Within 24 hours on business days
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Quick Links */}
          <div className="space-y-6">
            <Card className="hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Calendar className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">
                      Book a Free Discovery Call
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      20-30 minute call to discuss your needs and explore how we can work together
                    </p>
                    <Button
                      variant="accent"
                      onClick={() => window.open("https://calendly.com/dennismuchirim", "_blank")}
                    >
                      Schedule on Calendly
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">Email Directly</h3>
                    <a
                      href="mailto:dennismuchirim@gmail.com"
                      className="text-sm text-accent hover:underline break-all"
                    >
                      dennismuchirim@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-medium transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Linkedin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">Connect on LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/dennismuchirim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline"
                    >
                      linkedin.com/in/dennismuchirim
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-card rounded-lg p-6 border border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Privacy note:</strong> Your information is handled securely
                and will never be shared with third parties. All communications are confidential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
