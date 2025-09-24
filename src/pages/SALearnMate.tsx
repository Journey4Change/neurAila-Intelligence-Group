import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Globe, Users, TrendingUp, Smartphone, Brain, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SALearnMate = () => {
  const features = [
    {
      icon: BookOpen,
      title: "CAPS Curriculum Aligned",
      description: "Every answer, example, and quiz is 100% relevant to South African school curriculum"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Available in English, isiZulu, Sepedi, Xitsonga, and more South African languages"
    },
    {
      icon: Smartphone,
      title: "24/7 Accessibility",
      description: "Works online or offline for learners in low-connectivity areas"
    },
    {
      icon: Brain,
      title: "AI-Powered Tutoring",
      description: "Step-by-step explanations, not just answers - like having the best teacher in your pocket"
    }
  ];

  const subjects = [
    "Mathematics", "Physical Sciences", "Life Sciences", "Business Studies", "Tourism"
  ];

  const phases = [
    {
      phase: "Phase 1",
      title: "MVP Launch",
      description: "Launch with 3 core subjects in English",
      color: "from-blue-500 to-cyan-500"
    },
    {
      phase: "Phase 2", 
      title: "Expansion",
      description: "All CAPS subjects + multilingual support",
      color: "from-purple-500 to-pink-500"
    },
    {
      phase: "Phase 3",
      title: "Integration",
      description: "School dashboards, bulk licensing, NGO partnerships",
      color: "from-green-500 to-emerald-500"
    },
    {
      phase: "Phase 4",
      title: "Nationwide",
      description: "Full rollout across rural & urban schools",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">SA LearnMate</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Revolutionizing Education in South Africa</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Personal <span className="gradient-accent bg-clip-text text-transparent">AI Tutor</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Breaking down barriers to quality education. Available 24/7, multilingual, 
              and designed specifically for South African learners from Grades 8-12.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <BookOpen className="w-5 h-5" />
                Join Waitlist
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge We're Solving</h2>
            </div>

            <Card className="card-elevated p-8 mb-12">
              <CardContent className="p-0">
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="text-lg leading-relaxed mb-6">
                    In South Africa today, the difference between passing and failing often comes down to <strong className="text-foreground">access</strong>.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 my-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8 text-red-500" />
                      </div>
                      <p className="font-medium text-foreground">50 learners</p>
                      <p className="text-sm">sharing one textbook</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-8 h-8 text-orange-500" />
                      </div>
                      <p className="font-medium text-foreground">Rushed lessons</p>
                      <p className="text-sm">no individual attention</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-8 h-8 text-yellow-500" />
                      </div>
                      <p className="font-medium text-foreground">Private tutoring</p>
                      <p className="text-sm">out of reach for most</p>
                    </div>
                  </div>

                  <p className="text-lg leading-relaxed text-center">
                    <strong className="text-foreground">This is where SA LearnMate steps in.</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <Card key={feature.title} className="card-elevated hover-lift p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Helps Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How SA LearnMate Helps</h2>
              <p className="text-xl text-muted-foreground">
                Like having the best teacher in South Africa — one who never gets tired, never loses patience
              </p>
            </div>

            <div className="grid gap-4 mb-8">
              {[
                "Ask for help with Math, Physical Sciences, Life Sciences, Business Studies, and Tourism",
                "Take a picture of a question and get step-by-step explanations — not just answers",
                "Practice with past exam papers and AI-generated quizzes tailored to weak areas",
                "Download study summaries and notes for revision, even without data",
                "Track progress and improve week by week"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>

            <Card className="card-elevated p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-4">Supported Subjects</h3>
                <div className="flex flex-wrap gap-2">
                  {subjects.map((subject) => (
                    <span key={subject} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {subject}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Vision</h2>
            <Card className="card-elevated p-8 mb-12">
              <CardContent className="p-0">
                <p className="text-xl leading-relaxed text-muted-foreground mb-6">
                  We believe every learner in South Africa deserves the tools to succeed — 
                  regardless of where they live or what their parents earn.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="font-semibold mb-2">Raise Pass Rates</h3>
                    <p className="text-sm text-muted-foreground">In key subjects across the country</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-semibold mb-2">Build Confidence</h3>
                    <p className="text-sm text-muted-foreground">In learners who once felt left behind</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-purple-500" />
                    </div>
                    <h3 className="font-semibold mb-2">Empower Future</h3>
                    <p className="text-sm text-muted-foreground">With knowledge, skills, and hope</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Growth Plan */}
      <section className="py-16 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Growth Plan</h2>
              <p className="text-xl text-muted-foreground">Building the future of education in South Africa</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {phases.map((phase, index) => (
                <Card key={phase.phase} className="card-elevated hover-lift relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${phase.color}`}></div>
                    <div className="text-center">
                      <div className={`w-12 h-12 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{phase.phase}</h3>
                      <h4 className="font-semibold mb-3">{phase.title}</h4>
                      <p className="text-sm text-muted-foreground">{phase.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="card-elevated p-8">
              <CardContent className="p-0">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Education?</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  SA LearnMate is more than an app — it's a movement to make learning equal, fair, and empowering for every child in South Africa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="gap-2">
                    <BookOpen className="w-5 h-5" />
                    Join Our Waitlist
                  </Button>
                  <Link to="/#contact">
                    <Button variant="outline" size="lg">
                      Contact Us
                    </Button>
                  </Link>
                </div>
                
                <div className="mt-8 pt-8 border-t">
                  <p className="text-sm text-muted-foreground italic">
                    "Because when you give a learner the right tools, you're not just helping them pass an exam…<br/>
                    <strong className="text-foreground">You're changing their future."</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SALearnMate;