import { useState } from "react";
import { MapPin, Phone, Shield, Clock, Users, Map, Wifi, Star, Navigation, Building, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LocalGuideSA = () => {
  const mainPurposes = [
    {
      icon: Shield,
      title: "Safety & Emergencies",
      description: "Instantly locate the nearest hospital, police station, or pharmacy with one-tap emergency call buttons.",
      features: [
        "Nearest hospital, police station, pharmacy finder",
        "Emergency call buttons: 10111 (police), 10177 (ambulance), 112 (cell)",
        "Critical services when you need them most"
      ],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Map,
      title: "Daily Convenience",
      description: "Discover restaurants, shops, petrol stations, ATMs, and supermarkets with full details.",
      features: [
        "Restaurants, fast food outlets, and shops",
        "Petrol stations, ATMs, and supermarkets",
        "Directions, contact details, opening hours, reviews"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Star,
      title: "Local Guides",
      description: "Curated lists of the best places across South Africa's major cities.",
      features: [
        "24/7 Clinics in Gauteng",
        "Best Braai Spots in Durban", 
        "Trusted Police Stations in Cape Town"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Building,
      title: "Business Listings",
      description: "Modern Yellow Pages with maps, reviews, and live status updates.",
      features: [
        "Local businesses can claim their profile",
        "Update info in real-time",
        "Acts as a comprehensive local directory"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Wifi,
      title: "Offline Access",
      description: "Works even when data is low or off — perfect for rural South Africa.",
      features: [
        "Download maps + listings for your province",
        "Works without internet connection",
        "Essential for rural and low-data areas"
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Users,
      title: "Community Input",
      description: "Users contribute by adding places, reviews, and reporting changes.",
      features: [
        "Add new places and businesses",
        "Review and rate businesses",
        "Report issues like closures or new openings"
      ],
      color: "from-amber-500 to-yellow-500"
    }
  ];

  const targetUsers = [
    {
      icon: Heart,
      title: "Everyday People",
      description: "Save time, reduce stress, and improve safety in your daily life",
      benefits: ["Quick access to essential services", "Stress-free navigation", "Enhanced personal safety"]
    },
    {
      icon: Globe,
      title: "Tourists & Visitors", 
      description: "Navigate South Africa easily and safely with local insights",
      benefits: ["Safe travel guidance", "Local recommendations", "Cultural insights and tips"]
    },
    {
      icon: Building,
      title: "Local Businesses",
      description: "Get free visibility and reach more customers in your community",
      benefits: ["Free business listing", "Direct customer reach", "Community engagement"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                <MapPin className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              LocalGuide SA 🌍
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Your local South African guide for finding emergency services, businesses, and lifestyle spots — even offline
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Emergency Services
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Offline Access
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Community-Driven
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                SA-First Design
              </Badge>
            </div>
            <Button size="lg" className="btn-outline-hero">
              Coming Soon - Join Waitlist
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
      </section>

      {/* What It's All About */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              What <span className="gradient-accent bg-clip-text text-transparent">LocalGuide SA</span> Is All About
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              An app that helps people in South Africa quickly find important places around them, 
              from emergency services to everyday lifestyle spots.
            </p>
          </div>

          <div className="text-center mb-12">
            <div className="inline-block p-8 card-elevated hover-glow">
              <h3 className="text-2xl font-bold mb-4 gradient-hero bg-clip-text text-transparent">
                "Find Anything Nearby in SA" + "Emergency Safety Tool" + "Local Business Directory"
              </h3>
              <p className="text-lg text-muted-foreground">
                A SA-first version of Google Maps/Yelp, focused on safety, convenience, and local relevance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Purposes */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">🔑 Main Purposes</h2>
              <p className="text-xl text-muted-foreground">
                Six core features designed specifically for South African needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainPurposes.map((purpose, index) => (
                <Card 
                  key={purpose.title}
                  className="card-elevated hover-lift hover-glow group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${purpose.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <purpose.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {purpose.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {purpose.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {purpose.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">🧭 Why It's Valuable</h2>
              <p className="text-xl text-muted-foreground">
                Designed to serve everyone in the South African community
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {targetUsers.map((user, index) => (
                <Card 
                  key={user.title}
                  className="card-elevated hover-lift hover-glow group text-center"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <user.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {user.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {user.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {user.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center justify-center space-x-2 text-sm">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Highlight */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Built for South Africa</h2>
              <p className="text-xl text-muted-foreground">
                Understanding the unique challenges and opportunities of our beautiful country
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="card-elevated hover-lift hover-glow p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Safety First</h3>
                    <p className="text-muted-foreground">
                      Emergency services at your fingertips with one-tap calling for police, ambulance, and emergency services.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="card-elevated hover-lift hover-glow p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Works Offline</h3>
                    <p className="text-muted-foreground">
                      Download maps and listings for your area. Perfect for rural areas and when data is limited.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="card-elevated hover-lift hover-glow p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Community-Driven</h3>
                    <p className="text-muted-foreground">
                      Users contribute by adding places, writing reviews, and keeping information current and accurate.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="card-elevated hover-lift hover-glow p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
                    <p className="text-muted-foreground">
                      Curated guides like "Best Braai Spots" and "24/7 Clinics" created by locals for locals.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Navigate SA Like a Local?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of South Africans who will have safer, more convenient daily experiences.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="btn-hero">
                Join the Waitlist
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('mailto:neurailaintelligencegroup@gmail.com?subject=LocalGuide SA Partnership', '_blank')}
              >
                Partner With Us
              </Button>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                <div className="text-sm text-muted-foreground">Target Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">9</div>
                <div className="text-sm text-muted-foreground">Provinces Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocalGuideSA;