import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Dennis transformed our operations completely. What used to take our team hours now happens automatically. He didn't just set up tools — he understood our business and created systems that actually work.",
      author: "Sarah Mitchell",
      role: "Founder, TechStart SaaS",
      rating: 5,
    },
    {
      quote:
        "I was drowning in admin work and couldn't focus on growing my business. Dennis built automations that gave me back 15+ hours per week. Best investment I've made this year.",
      author: "Marcus Johnson",
      role: "CEO, Digital Marketing Agency",
      rating: 5,
    },
    {
      quote:
        "His technical expertise combined with clear communication made the whole process seamless. Dennis delivered beyond what we asked for, and the ROI was immediate.",
      author: "Jennifer Lee",
      role: "Operations Director, E-commerce Brand",
      rating: 5,
    },
    {
      quote:
        "We've worked with several VAs before, but Dennis stands out. His AI automation knowledge is exceptional, and he's always thinking three steps ahead about how to optimize our workflows.",
      author: "David Omondi",
      role: "Executive, Consulting Firm",
      rating: 5,
    },
    {
      quote:
        "From CRM setup to custom dashboards, Dennis handled everything professionally. Our data is finally organized, and our team can actually access the insights they need in real-time.",
      author: "Rachel Adams",
      role: "COO, Healthcare Startup",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">What Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from businesses that transformed their operations
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="fill-accent text-accent" size={18} />
                      ))}
                    </div>
                    <blockquote className="text-foreground mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-primary">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
