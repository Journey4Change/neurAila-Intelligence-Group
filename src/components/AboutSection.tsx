import { Brain, Globe, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const values = [
    {
      icon: Brain,
      title: "Ethical AI",
      description: "Building responsible AI systems that prioritize human values and societal benefit"
    },
    {
      icon: Globe,
      title: "Africa-Centered",
      description: "Solutions designed specifically for African challenges and opportunities"
    },
    {
      icon: Rocket,
      title: "Future-Driven",
      description: "Pioneering innovation that transforms how Africa engages with technology"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-hero bg-clip-text text-transparent">neurAila</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              neurAila Intelligence Group is a South African-born AI innovation company 
              building apps and platforms that solve real challenges — from helping students 
              learn to inspiring nation-wide transformation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="card-elevated p-8 text-center hover-lift hover-glow group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="btn-hero"
            onClick={() => window.location.href = "/about"}
          >
            Learn More About Our Story
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;