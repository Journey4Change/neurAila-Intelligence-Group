import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Brain, Target, Clock, Users, Zap, CheckCircle, Star, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SmartPlannerAI = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Planning",
      description: "Advanced algorithms analyze your goals and create personalized, actionable plans."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automatically optimizes your calendar based on priorities, deadlines, and availability."
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set and monitor progress towards personal and professional objectives with intelligent insights."
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Optimize your daily routine with AI-driven time allocation and productivity recommendations."
    },
    {
      icon: Users,
      title: "Team Coordination",
      description: "Seamlessly coordinate with family, friends, or colleagues for shared goals and events."
    },
    {
      icon: Zap,
      title: "Smart Reminders",
      description: "Context-aware notifications and reminders that adapt to your schedule and preferences."
    }
  ];

  const targetUsers = [
    "Busy professionals managing multiple projects",
    "Students balancing academics and personal life",
    "Parents organizing family schedules and activities",
    "Entrepreneurs planning business growth",
    "Anyone seeking better work-life balance"
  ];

  const advancedFeatures = [
    "Natural language processing for easy task creation",
    "Predictive analytics for better time estimates",
    "Integration with popular calendar and task apps",
    "Habit tracking and formation assistance",
    "AI-generated insights and productivity tips",
    "Cross-platform synchronization"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-8">
            <Calendar className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Smart Planner <span className="gradient-accent bg-clip-text text-transparent">AI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Organize your life with intelligent planning powered by advanced AI algorithms. 
            Transform chaos into clarity with personalized schedules and smart recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Sparkles className="w-5 h-5 mr-2" />
              Join Waitlist
            </Button>
            <Button size="lg" variant="outline">
              <Star className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Tired of <span className="text-destructive">Overwhelming Schedules?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Modern life is complex. Between work deadlines, personal goals, family commitments, and social activities, 
              staying organized feels impossible. Traditional planners can't adapt to your changing priorities or 
              help you make smart decisions about your time.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Intelligent Features for <span className="gradient-accent bg-clip-text text-transparent">Smarter Planning</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI doesn't just organize your schedule—it understands your goals and helps you achieve them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="card-elevated p-8 hover-lift">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Perfect for <span className="gradient-accent bg-clip-text text-transparent">Everyone</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {targetUsers.map((user, index) => (
                <div key={index} className="flex items-center gap-4 p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg">{user}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              Advanced <span className="gradient-accent bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {advancedFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-6 text-left">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Our <span className="gradient-accent bg-clip-text text-transparent">Vision</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We envision a world where everyone can achieve their goals without the stress of overwhelming schedules. 
              Smart Planner AI combines the power of artificial intelligence with intuitive design to create 
              the ultimate personal productivity companion.
            </p>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-border/50">
              <p className="text-lg text-muted-foreground italic">
                "Planning shouldn't be a chore—it should be intelligent, adaptive, and empowering."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your <span className="gradient-accent bg-clip-text text-transparent">Planning?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already experiencing smarter, more efficient planning with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Sparkles className="w-5 h-5 mr-2" />
              Get Early Access
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/')}>
              Explore More Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartPlannerAI;