import { Button } from "@/components/ui/button";
import { Handshake, DollarSign, Users } from "lucide-react";

const CTASection = () => {
  const actions = [
    {
      icon: Handshake,
      title: "Become a Partner",
      description: "Collaborate with us to build Africa's AI future"
    },
    {
      icon: DollarSign,
      title: "Sponsor a Project",
      description: "Support our mission to democratize AI education"
    },
    {
      icon: Users,
      title: "Join Our Team",
      description: "Help us build the next generation of African AI"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building Africa's <span className="gradient-hero bg-clip-text text-transparent">AI Future</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're building a future where Africa leads in AI innovation. 
            Want to be part of this transformational journey?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {actions.map((action, index) => (
            <div 
              key={action.title}
              className="text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 rounded-full gradient-accent flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <action.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {action.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {action.description}
              </p>
              <Button 
                className="btn-hero group-hover:scale-105 transition-transform duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 p-6 bg-card rounded-xl card-elevated">
            <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
              <span className="text-white font-bold">✦</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Ready to make an impact?</p>
              <p className="text-muted-foreground">Contact us to discuss partnership opportunities</p>
            </div>
            <Button 
              className="btn-outline-hero"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;