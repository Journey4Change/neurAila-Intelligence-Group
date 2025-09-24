import { useState } from "react";
import { Brain, Heart, Users, Target, Leaf, ArrowRight, Calendar, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const navigate = useNavigate();

  const coreValues = [
    {
      icon: Brain,
      title: "Innovation",
      description: "Pioneering AI solutions that push boundaries and create new possibilities"
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "Building technology with deep understanding of human needs and experiences"
    },
    {
      icon: Users,
      title: "Inclusion",
      description: "Creating accessible solutions that serve everyone, regardless of background"
    },
    {
      icon: Target,
      title: "Purpose",
      description: "Every solution we build has a clear mission to improve lives and communities"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Developing technology that creates lasting positive impact for future generations"
    }
  ];

  const platforms = [
    {
      name: "Neurova AI",
      description: "Advanced artificial intelligence chatbot providing intelligent conversations and assistance",
      color: "from-orange-500 to-red-600",
      route: "/neurova-ai"
    },
    {
      name: "Smart Planner AI",
      description: "Organize your life with intelligent planning powered by advanced AI algorithms",
      color: "from-blue-500 to-purple-600",
      route: "/smart-planner-ai"
    },
    {
      name: "NexusAI",
      description: "Business automation solutions designed for African entrepreneurs and small businesses",
      color: "from-green-500 to-teal-600",
      route: "/nexus-ai"
    },
    {
      name: "SA LearnMate",
      description: "AI tutoring platform for Grade 8–12 students across South Africa's curriculum",
      color: "from-purple-500 to-pink-600",
      route: "/sa-learnmate"
    },
    {
      name: "PocketWise",
      description: "Smart budgeting app that helps you track income, control expenses, and reach your savings goals",
      color: "from-emerald-500 to-cyan-600",
      route: "/pocketwise"
    },
    {
      name: "LinkUp",
      description: "Social communication platform connecting people through meaningful interactions and shared experiences",
      color: "from-indigo-500 to-blue-600",
      route: "/linkup"
    },
    {
      name: "Cosmic Memory",
      description: "Immersive gaming experience featuring multiple games and cosmic adventures for entertainment",
      color: "from-violet-500 to-purple-600",
      route: "/cosmic-memory"
    },
    {
      name: "LocalGuide SA",
      description: "Your local South African guide for finding emergency services, businesses, and lifestyle spots with offline access",
      color: "from-amber-500 to-orange-600",
      route: "/localguide-sa"
    },
    {
      name: "GlobalAuctions",
      description: "Dynamic auction platform where users can list items and compete in real-time bidding for unique finds and collectibles",
      color: "from-red-500 to-rose-600",
      route: "/global-auctions"
    }
  ];

  const milestones = [
    {
      year: "2025",
      event: "neurAila Intelligence Group Founded",
      description: "Euclid Tumelo Ramaila establishes the company with a vision to transform Africa through AI"
    },
    {
      year: "Q1 2025",
      event: "Journey4Change Launch Preparation",
      description: "1800km walking initiative development and community outreach begins"
    },
    {
      year: "Q2 2025",
      event: "Smart Planner AI MVP Testing",
      description: "Beta testing with select users to refine productivity features"
    },
    {
      year: "Q3 2025",
      event: "First School Partnership",
      description: "SA LearnMate pilot program launched with local schools"
    },
    {
      year: "Future",
      event: "Expansion & Impact",
      description: "Scaling solutions across Africa and reaching 100K+ lives"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-hero bg-clip-text text-transparent">neurAila</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The story of how one vision became a movement to transform Africa through ethical AI and human-centered innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="card-elevated p-12 hover-glow">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-hero bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-2xl leading-relaxed text-foreground font-medium">
                "At neurAila Intelligence Group, we build AI-driven solutions that change lives, 
                empower youth, and drive innovation across Africa — one step, one student, one entrepreneur at a time."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">
                  The Story Behind <span className="gradient-hero bg-clip-text text-transparent">neurAila</span>
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    neurAila was born from the streets of South Africa, where I witnessed firsthand the 
                    gaps that technology could fill. Growing up, I saw brilliant minds held back by 
                    limited access to quality education, mental health struggles swept under the carpet, 
                    and small businesses failing not from lack of passion, but lack of tools.
                  </p>
                  <p>
                    I didn't wait for someone else to build the future. I started walking toward it — 
                    literally. The idea for Journey4Change came during long walks where I realized that 
                    transformation begins with movement, both physical and mental.
                  </p>
                  <p>
                    Every platform we build at neurAila addresses a problem I've lived through or 
                    witnessed in my community. This isn't just business — it's personal mission 
                    powered by AI to create the change Africa deserves.
                  </p>
                </div>
                <div className="mt-8 p-6 bg-card rounded-xl border border-border/50">
                  <p className="text-lg font-medium text-foreground italic">
                    "Innovation happens when you refuse to accept that 'this is just how things are.' 
                    Africa doesn't need to catch up — we're building the future."
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    — Euclid Tumelo Ramaila, Founder & CEO
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl gradient-accent p-1">
                  <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Brain className="w-24 h-24 text-primary mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-foreground">Euclid Tumelo Ramaila</h3>
                      <p className="text-muted-foreground">Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
            <div className="card-elevated p-10 hover-glow">
              <p className="text-2xl leading-relaxed text-foreground font-medium">
                "To become Africa's most impactful AI innovation hub, improving lives through technology 
                that's accessible, human-centered, and purpose-driven — where every solution strengthens 
                communities and every innovation opens doors to opportunity."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
              <p className="text-xl text-muted-foreground">
                The principles that guide every decision and every line of code we write
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <Card 
                  key={value.title}
                  className="card-elevated hover-lift hover-glow group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Platforms */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Meet Our Platforms</h2>
              <p className="text-xl text-muted-foreground">
                Nine innovative AI-powered solutions addressing Africa's most pressing challenges
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <Card 
                  key={platform.name}
                  className="card-elevated hover-lift hover-glow group cursor-pointer"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-8">
                    <div className={`w-full h-2 rounded-full bg-gradient-to-r ${platform.color} mb-6`}></div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {platform.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {platform.description}
                    </p>
                    <Button 
                      variant="ghost" 
                      className="group-hover:translate-x-2 transition-transform duration-300"
                      onClick={() => navigate(platform.route)}
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Journey So Far</h2>
              <p className="text-xl text-muted-foreground">
                Key milestones in building Africa's AI-powered future
              </p>
            </div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className="flex items-start space-x-6 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="card-elevated p-6 flex-1 hover-lift">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {milestone.event}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Ready to Join Our Mission?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Whether you're an investor, partner, or changemaker — there's a place for you in Africa's AI revolution.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="card-elevated hover-lift hover-glow p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="font-medium">Email Us</span>
                </div>
                <p className="text-muted-foreground mb-4">neurailaintelligencegroup@gmail.com</p>
                <Button 
                  className="btn-hero w-full" 
                  onClick={() => window.open('mailto:neurailaintelligencegroup@gmail.com', '_blank')}
                >
                  Send Email
                </Button>
              </Card>
              
              <Card className="card-elevated hover-lift hover-glow p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <span className="font-medium">Call Us</span>
                </div>
                <p className="text-muted-foreground mb-4">+27 82 813 4960</p>
                <Button 
                  className="btn-hero w-full" 
                  onClick={() => window.open('tel:+27828134960', '_blank')}
                >
                  Call Now
                </Button>
              </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="btn-hero"
                onClick={() => window.open('mailto:neurailaintelligencegroup@gmail.com?subject=Partnership Opportunity', '_blank')}
              >
                Become a Partner
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('mailto:neurailaintelligencegroup@gmail.com?subject=Project Sponsorship', '_blank')}
              >
                Sponsor a Project
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.open('mailto:neurailaintelligencegroup@gmail.com?subject=Join Our Team', '_blank')}
              >
                Join Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;