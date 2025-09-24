import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-africa-ai.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="African AI Innovation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent" />
      </div>

      {/* Neural Network Animation Overlay */}
      <div className="absolute inset-0">
        <div className="neural-pulse absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-60" />
        <div className="neural-pulse absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full opacity-40" 
             style={{ animationDelay: '1s' }} />
        <div className="neural-pulse absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary-glow rounded-full opacity-50" 
             style={{ animationDelay: '2s' }} />
        <div className="neural-pulse absolute top-1/2 right-1/4 w-1 h-1 bg-accent-glow rounded-full opacity-30" 
             style={{ animationDelay: '3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-hero bg-clip-text text-transparent">
                Empowering Africa
              </span>
              <br />
              <span className="text-foreground">
                Through Ethical AI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              We build intelligent systems and life-changing tools for education, 
              productivity, and social good across the continent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="btn-hero text-lg px-8 py-6"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Projects
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-outline-hero text-lg px-8 py-6"
                onClick={() => navigate('/contact')}
              >
                Join the Mission
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;