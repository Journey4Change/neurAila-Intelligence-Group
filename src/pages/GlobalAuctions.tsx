import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Hammer, Users, Shield, Clock, DollarSign, Trophy, Star, Gavel, TrendingUp, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GlobalAuctions = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Hammer,
      title: "Live Auction Bidding",
      description: "Participate in real-time auctions with instant bid updates and notifications"
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Join a vibrant community of collectors, sellers, and auction enthusiasts"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Advanced security measures to protect both buyers and sellers"
    },
    {
      icon: Clock,
      title: "Timed Auctions",
      description: "Structured auction periods with countdown timers and automatic bidding"
    },
    {
      icon: Trophy,
      title: "Rare Collectibles",
      description: "Discover unique items, antiques, and collectibles from around the world"
    },
    {
      icon: TrendingUp,
      title: "Price Analytics",
      description: "Track item values and market trends to make informed bidding decisions"
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description: "Get the best deals through competitive bidding processes"
    },
    {
      icon: Globe,
      title: "Global Marketplace",
      description: "Access to international sellers and unique items worldwide"
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "Verified listings and seller ratings for trusted transactions"
    },
    {
      icon: Gavel,
      title: "Fair Bidding",
      description: "Transparent auction processes with equal opportunities for all bidders"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8 flex h-16 items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="flex items-center gap-2 hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-rose-500 mb-8 mx-auto">
              <Hammer className="w-10 h-10 text-white" />
            </div>
            
            <Badge className="mb-6" variant="secondary">
              In Development
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Global<span className="text-red-500">Auctions</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The premier auction platform where collectors, sellers, and bidders come together 
              to discover unique treasures and compete for exceptional items through exciting 
              real-time auctions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                <Gavel className="w-5 h-5 mr-2" />
                Start Bidding
              </Button>
              <Button variant="outline" size="lg">
                Browse Auctions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What GlobalAuctions Is About */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Is <span className="text-red-500">GlobalAuctions</span>?
              </h2>
              <p className="text-xl text-muted-foreground">
                A revolutionary auction platform that brings the excitement of live bidding to your fingertips
              </p>
            </div>

            <Card className="mb-12 border-2 border-red-100 dark:border-red-900/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Hammer className="w-8 h-8 text-red-500" />
                  The Ultimate Auction Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  GlobalAuctions is a comprehensive auction platform designed for both casual bidders 
                  and serious collectors. Whether you're hunting for vintage collectibles, rare antiques, 
                  modern electronics, or unique art pieces, our platform provides a secure and exciting 
                  environment for competitive bidding.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-red-500">For Bidders:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Discover unique items from verified sellers</li>
                      <li>• Participate in live, timed auctions</li>
                      <li>• Set maximum bid limits for automatic bidding</li>
                      <li>• Track auction history and price trends</li>
                      <li>• Secure payment and shipping options</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-red-500">For Sellers:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• List items with detailed descriptions and photos</li>
                      <li>• Set reserve prices and auction duration</li>
                      <li>• Reach a global audience of potential buyers</li>
                      <li>• Real-time bidding notifications</li>
                      <li>• Integrated seller rating system</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Platform <span className="text-red-500">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced auction technology designed to create fair, secure, and exciting bidding experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={feature.title} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Value Proposition */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-red-500">GlobalAuctions</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of satisfied users who have found their perfect items and made successful sales
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="border-red-100 dark:border-red-900/30">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It <span className="text-red-500">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Getting started is simple - follow these easy steps to begin your auction journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Browse & Register</h3>
              <p className="text-muted-foreground">
                Create your account and explore our vast collection of auction items across various categories
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Place Your Bids</h3>
              <p className="text-muted-foreground">
                Participate in live auctions, set maximum bids, and compete with other bidders in real-time
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Win & Receive</h3>
              <p className="text-muted-foreground">
                Secure payment processing and reliable shipping ensure you receive your winning items safely
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-500 to-rose-500">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Bidding?
            </h2>
            <p className="text-xl mb-8 text-red-100">
              Join our community of auction enthusiasts and discover your next treasure. 
              Sign up today and get access to exclusive auctions and early bidding opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-red-500 hover:bg-gray-100">
                Join the Community
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-500">
                View Current Auctions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalAuctions;