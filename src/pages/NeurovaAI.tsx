import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Brain, Sparkles, Users, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NeurovaAI = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "Advanced Intelligence",
      description: "Powered by state-of-the-art language models with deep understanding and reasoning capabilities"
    },
    {
      icon: MessageCircle,
      title: "Natural Conversations",
      description: "Engage in human-like dialogue that feels authentic, contextual, and genuinely helpful"
    },
    {
      icon: Sparkles,
      title: "Creative & Analytical",
      description: "From creative writing to complex problem-solving, Neurova adapts to your unique needs"
    },
    {
      icon: Users,
      title: "Personalized Experience",
      description: "Learns your preferences and communication style to provide increasingly relevant assistance"
    },
    {
      icon: Shield,
      title: "Privacy-First",
      description: "Your conversations are secure, encrypted, and never used to train other models"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant responses with minimal latency, designed for seamless real-time interaction"
    }
  ];

  const useCases = [
    "Creative writing and brainstorming",
    "Academic research and learning",
    "Business strategy and planning", 
    "Technical problem-solving",
    "Content creation and editing",
    "Personal productivity assistance"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-background/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
            <Brain className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Meet <span className="gradient-accent bg-clip-text text-transparent">Neurova AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            The next generation of conversational AI that understands, adapts, and evolves with every interaction.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
            <Sparkles className="w-4 h-4" />
            Currently in Development
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              🚀 The Future of AI Conversation
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-xl leading-relaxed">
                In a world flooded with generic AI responses, <strong>Neurova AI</strong> stands apart as a truly intelligent companion that understands context, nuance, and the unique challenges of modern life.
              </p>
              
              <p>
                Imagine an AI that doesn't just answer questions, but engages in meaningful dialogue. One that remembers your preferences, understands your goals, and adapts its communication style to match your needs perfectly.
              </p>
              
              <p>
                Whether you're a student tackling complex assignments, an entrepreneur building the next big thing, or a creative professional seeking inspiration, Neurova AI becomes your intelligent partner in achieving excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            ✨ What Makes Neurova Special
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="card-elevated p-6 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              🎯 Perfect For Every Need
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {useCases.map((useCase, index) => (
                <div 
                  key={useCase}
                  className="flex items-center p-4 bg-card rounded-lg border hover:border-primary/30 transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-left">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            🌍 Our Vision
          </h2>
          
          <div className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              We're building more than just another chatbot. Neurova AI represents our commitment to democratizing access to intelligent assistance, making advanced AI capabilities available to everyone.
            </p>
            
            <p>
              In an era where AI can transform how we learn, work, and create, Neurova AI ensures that this transformation is inclusive, ethical, and genuinely beneficial for users across all backgrounds and industries.
            </p>
            
            <p className="text-xl font-semibold text-foreground">
              Because the future of AI should be conversational, personal, and empowering.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="card-elevated p-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Experience the Future?
            </h2>
            
            <p className="text-muted-foreground mb-8">
              Neurova AI is currently in development. Be among the first to experience next-generation conversational AI.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8"
              onClick={() => navigate('/contact')}
            >
              Get Early Access
              <Sparkles className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NeurovaAI;