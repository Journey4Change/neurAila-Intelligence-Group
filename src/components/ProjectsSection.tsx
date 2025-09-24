import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Brain, Briefcase, Wallet, Users, Gamepad2, Hammer } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Neurova AI",
      description: "Advanced artificial intelligence chatbot providing intelligent conversations and assistance.",
      icon: Brain,
      color: "bg-gradient-to-br from-orange-500 to-red-500",
      status: "In Development"
    },
    {
      name: "Smart Planner AI",
      description: "Organize your life with intelligent planning powered by advanced AI algorithms.",
      icon: Calendar,
      color: "bg-gradient-to-br from-blue-500 to-purple-500",
      status: "In Development"
    },
    {
      name: "NexusAI",
      description: "Business automation solutions designed for African entrepreneurs and small businesses.",
      icon: Briefcase,
      color: "bg-gradient-to-br from-green-500 to-teal-500",
      status: "In Development"
    },
    {
      name: "SA LearnMate",
      description: "AI tutoring platform for Grade 8–12 students across South Africa's curriculum.",
      icon: Brain,
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
      status: "In Development"
    },
    {
      name: "PocketWise",
      description: "Smart budgeting app that helps you track income, control expenses, and reach your savings goals.",
      icon: Wallet,
      color: "bg-gradient-to-br from-emerald-500 to-cyan-500",
      status: "In Development"
    },
    {
      name: "LinkUp",
      description: "Social communication platform connecting people through meaningful interactions and shared experiences.",
      icon: Users,
      color: "bg-gradient-to-br from-indigo-500 to-blue-500",
      status: "In Development"
    },
    {
      name: "Cosmic Memory",
      description: "Immersive gaming experience featuring multiple games and cosmic adventures for entertainment.",
      icon: Gamepad2,
      color: "bg-gradient-to-br from-violet-500 to-purple-500",
      status: "In Development"
    },
    {
      name: "LocalGuide SA",
      description: "Your local South African guide for finding emergency services, businesses, and lifestyle spots with offline access.",
      icon: MapPin,
      color: "bg-gradient-to-br from-amber-500 to-orange-500",
      status: "In Development"
    },
    {
      name: "GlobalAuctions",
      description: "Dynamic auction platform where users can list items and compete in real-time bidding for unique finds and collectibles.",
      icon: Hammer,
      color: "bg-gradient-to-br from-red-500 to-rose-500",
      status: "In Development"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative AI solutions tackling real challenges across education, business, and social impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className="card-elevated p-8 hover-lift hover-glow group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {project.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                {project.name}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <Button 
                variant="ghost" 
                className="p-0 h-auto font-semibold text-primary hover:text-primary-glow group-hover:translate-x-2 transition-all duration-300"
                onClick={() => {
                  if (project.name === "SA LearnMate") {
                    window.location.href = "/sa-learnmate";
                  } else if (project.name === "Neurova AI") {
                    window.location.href = "/neurova-ai";
                  } else if (project.name === "PocketWise") {
                    window.location.href = "/pocketwise";
                  } else if (project.name === "Smart Planner AI") {
                    window.location.href = "/smart-planner-ai";
                  } else if (project.name === "NexusAI") {
                    window.location.href = "/nexus-ai";
                  } else if (project.name === "LinkUp") {
                    window.location.href = "/linkup";
                  } else if (project.name === "Cosmic Memory") {
                    window.location.href = "/cosmic-memory";
                  } else if (project.name === "LocalGuide SA") {
                    window.location.href = "/localguide-sa";
                  } else if (project.name === "GlobalAuctions") {
                    window.location.href = "/globalauctions";
                  } else {
                    window.location.href = "/contact";
                  }
                }}
              >
                Learn More 
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-dashed border-muted-foreground/40 group-hover:border-primary transition-colors duration-300">
            <span className="text-2xl text-muted-foreground">+</span>
          </div>
          <p className="text-muted-foreground mt-4">More innovative projects coming soon</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;