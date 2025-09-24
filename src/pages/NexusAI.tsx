import { Button } from "@/components/ui/button";
import { ArrowLeft, Briefcase, Brain, TrendingUp, Users, Shield, Zap, CheckCircle, Star, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NexusAI = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "Intelligent Automation",
      description: "AI-powered workflows that handle routine tasks, freeing you to focus on growth and strategy."
    },
    {
      icon: TrendingUp,
      title: "Business Analytics",
      description: "Real-time insights into sales, customer behavior, and market trends tailored for African markets."
    },
    {
      icon: Users,
      title: "Customer Management",
      description: "Smart CRM that understands local business relationships and cultural nuances."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with local data storage options and compliance with African regulations."
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Get started in minutes with pre-configured templates for common African business models."
    },
    {
      icon: Briefcase,
      title: "Multi-Business Support",
      description: "Manage multiple ventures, side hustles, or business units from a single platform."
    }
  ];

  const targetUsers = [
    "Small business owners and entrepreneurs",
    "Freelancers and consultants",
    "Local retailers and service providers",
    "Startups and growing companies",
    "Multi-business operators and investors"
  ];

  const advancedFeatures = [
    "Local currency and payment method integration",
    "Multi-language support for African languages",
    "Offline capability for unreliable internet areas",
    "Integration with popular African business tools",
    "Community marketplace for business resources",
    "AI-powered business coaching and recommendations"
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
      <section className="py-20 bg-gradient-to-br from-green-500/10 to-teal-500/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mx-auto mb-8">
            <Briefcase className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nexus<span className="gradient-accent bg-clip-text text-transparent">AI</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Business automation solutions designed specifically for African entrepreneurs and small businesses. 
            Harness the power of AI to streamline operations, boost productivity, and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Sparkles className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              <Star className="w-5 h-5 mr-2" />
              See Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Business Growth <span className="text-destructive">Shouldn't Be This Hard</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              African entrepreneurs face unique challenges: limited resources, complex market dynamics, 
              and the need to juggle multiple responsibilities. Traditional business software isn't built 
              for our context, our challenges, or our opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Built for <span className="gradient-accent bg-clip-text text-transparent">African Business</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every feature is designed with African entrepreneurs in mind, from local payment methods to cultural business practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="card-elevated p-8 hover-lift">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mb-6">
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
              Empowering <span className="gradient-accent bg-clip-text text-transparent">Every Entrepreneur</span>
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
              Advanced <span className="gradient-accent bg-clip-text text-transparent">African-First Features</span>
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
              Our <span className="gradient-accent bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We believe that every African entrepreneur deserves access to world-class business tools. 
              NexusAI is more than software—it's a catalyst for economic transformation across the continent, 
              empowering businesses to thrive in the digital age while staying rooted in African values.
            </p>
            <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-2xl p-8 border border-border/50">
              <p className="text-lg text-muted-foreground italic">
                "Technology should amplify African ingenuity, not replace it."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-green-500/10 to-teal-500/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="gradient-accent bg-clip-text text-transparent">Scale Your Business?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the growing community of African entrepreneurs who are transforming their businesses with AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Sparkles className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/')}>
              Explore More Solutions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NexusAI;