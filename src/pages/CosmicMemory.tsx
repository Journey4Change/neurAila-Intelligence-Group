import { Button } from "@/components/ui/button";
import { ArrowLeft, Gamepad2, Zap, Trophy, Users, Brain, Star, CheckCircle, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CosmicMemory = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "Memory Challenges",
      description: "Train your brain with progressive memory games that adapt to your skill level."
    },
    {
      icon: Zap,
      title: "Action Adventures",
      description: "Fast-paced cosmic adventures that test reflexes and strategic thinking."
    },
    {
      icon: Trophy,
      title: "Achievement System",
      description: "Unlock badges, level up, and compete on global leaderboards."
    },
    {
      icon: Users,
      title: "Multiplayer Modes",
      description: "Challenge friends or compete with players worldwide in real-time."
    },
    {
      icon: Star,
      title: "Cosmic Storyline",
      description: "Immerse yourself in an epic space narrative across multiple game modes."
    },
    {
      icon: Gamepad2,
      title: "Multiple Game Types",
      description: "From puzzle solving to action sequences—something for every gaming preference."
    }
  ];

  const gameTypes = [
    "Memory Pattern Matching",
    "Cosmic Puzzle Adventures",
    "Space-themed Action Games",
    "Brain Training Challenges",
    "Multiplayer Competitions"
  ];

  const advancedFeatures = [
    "AI-powered difficulty adjustment",
    "Personalized gaming experience",
    "Cross-platform progress sync",
    "Social gaming features and clubs",
    "Regular content updates and new games",
    "Offline play capabilities"
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
      <section className="py-20 bg-gradient-to-br from-violet-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mx-auto mb-8">
            <Gamepad2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cosmic <span className="gradient-accent bg-clip-text text-transparent">Memory</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Immersive gaming experience featuring multiple games and cosmic adventures for entertainment. 
            Journey through space while training your mind and having incredible fun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Sparkles className="w-5 h-5 mr-2" />
              Start Playing
            </Button>
            <Button size="lg" variant="outline">
              <Star className="w-5 h-5 mr-2" />
              Watch Trailer
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Gaming Should Be <span className="text-primary">More Than Entertainment</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Most games today are either mindless entertainment or frustratingly difficult challenges. 
              What if gaming could be fun, engaging, AND beneficial for your cognitive development? 
              Welcome to the cosmic universe where entertainment meets brain training.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Epic <span className="gradient-accent bg-clip-text text-transparent">Gaming Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every game mode is designed to challenge your mind while providing hours of cosmic entertainment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="card-elevated p-8 hover-lift">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Types */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Multiple <span className="gradient-accent bg-clip-text text-transparent">Game Modes</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {gameTypes.map((gameType, index) => (
                <div key={index} className="flex items-center gap-4 p-6 rounded-lg border border-border/50 hover:border-primary/50 transition-colors">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-lg">{gameType}</span>
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
              Advanced <span className="gradient-accent bg-clip-text text-transparent">Gaming Tech</span>
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
              Our <span className="gradient-accent bg-clip-text text-transparent">Gaming Philosophy</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We believe gaming should be a journey of discovery, growth, and joy. Cosmic Memory combines 
              the thrill of space exploration with the satisfaction of mental challenges, creating an 
              experience that entertains, educates, and empowers players of all ages.
            </p>
            <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl p-8 border border-border/50">
              <p className="text-lg text-muted-foreground italic">
                "The best games don't just pass time—they expand minds and create memories."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-violet-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for <span className="gradient-accent bg-clip-text text-transparent">Cosmic Adventures?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of players already exploring the cosmos and challenging their minds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Sparkles className="w-5 h-5 mr-2" />
              Begin Your Journey
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/')}>
              Explore Other Worlds
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CosmicMemory;