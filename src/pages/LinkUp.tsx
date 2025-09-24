import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Heart, MessageCircle, Share2, Globe, Shield, CheckCircle, Star, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LinkUp = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: MessageCircle,
      title: "Meaningful Conversations",
      description: "Connect through rich, contextual conversations that go beyond surface-level interactions."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Create and join communities based on shared interests, goals, and values."
    },
    {
      icon: Share2,
      title: "Smart Sharing",
      description: "Share experiences, thoughts, and moments with AI-powered content suggestions."
    },
    {
      icon: Heart,
      title: "Genuine Connections",
      description: "Algorithm designed to promote authentic relationships over engagement metrics."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with people worldwide while maintaining local community focus."
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Advanced moderation and privacy controls to ensure a positive experience for everyone."
    }
  ];

  const targetUsers = [
    "People seeking meaningful social connections",
    "Communities and interest groups",
    "Professional networkers and collaborators",
    "Content creators and storytellers",
    "Anyone tired of superficial social media"
  ];

  const advancedFeatures = [
    "AI-powered conversation starters and icebreakers",
    "Smart matching based on interests and values",
    "Event planning and community organization tools",
    "Multi-media storytelling with rich content support",
    "Privacy-first design with granular control",
    "Cross-platform synchronization and accessibility"
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
      <section className="py-20 bg-gradient-to-br from-indigo-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mx-auto mb-8">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Link<span className="gradient-accent bg-clip-text text-transparent">Up</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Social communication platform connecting people through meaningful interactions and shared experiences. 
            Where authentic relationships flourish and communities thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Sparkles className="w-5 h-5 mr-2" />
              Join Community
            </Button>
            <Button size="lg" variant="outline">
              <Star className="w-5 h-5 mr-2" />
              Explore Features
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Social Media <span className="text-destructive">Lost Its Soul</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Today's social platforms prioritize likes over relationships, viral content over authentic conversations, 
              and engagement metrics over genuine human connection. It's time for something different—something real.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Built for <span className="gradient-accent bg-clip-text text-transparent">Real Connections</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every feature is designed to foster authentic relationships and meaningful community engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="card-elevated p-8 hover-lift">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mb-6">
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
              Perfect for <span className="gradient-accent bg-clip-text text-transparent">Every Social Soul</span>
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
              Advanced <span className="gradient-accent bg-clip-text text-transparent">Social Features</span>
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
              We envision a digital world where social platforms bring out the best in humanity. 
              LinkUp is designed to create spaces where people can be authentic, communities can flourish, 
              and meaningful relationships can grow—both online and offline.
            </p>
            <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-2xl p-8 border border-border/50">
              <p className="text-lg text-muted-foreground italic">
                "True connection happens when we focus on understanding rather than being understood."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="gradient-accent bg-clip-text text-transparent">Connect Authentically?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join a growing community of people who believe in the power of genuine human connection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Sparkles className="w-5 h-5 mr-2" />
              Be the First to Connect
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/')}>
              Discover More Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinkUp;