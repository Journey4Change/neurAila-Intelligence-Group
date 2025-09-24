import { Button } from "@/components/ui/button";
import { ArrowLeft, Wallet, TrendingUp, PieChart, Target, Shield, Bell, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PocketWise = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Wallet,
      title: "Track Your Money Effortlessly",
      description: "Add and manage income from multiple sources. Log expenses with smart categories and edit transactions anytime."
    },
    {
      icon: TrendingUp,
      title: "Stay on Top of Your Finances",
      description: "Dashboard showing total income, expenses, and current balance with quick view of recent transactions."
    },
    {
      icon: PieChart,
      title: "Visualize Spending with Analytics",
      description: "Beautiful charts to see expense breakdowns, compare monthly income vs expenses, and track balance trends."
    },
    {
      icon: Target,
      title: "Smart Budgeting Tools",
      description: "Set monthly budgets per category with progress indicators and alerts when you're overspending."
    },
    {
      icon: Shield,
      title: "Secure & Accessible",
      description: "Login with email or social accounts. Sync data safely across devices with cloud backup."
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get reminders before bills are due and alerts when approaching budget limits."
    }
  ];

  const targetUsers = [
    "Students managing allowances",
    "Professionals tracking salary and expenses", 
    "Families planning budgets together",
    "Anyone who wants clarity and control over their money"
  ];

  const advancedFeatures = [
    "Recurring transactions for salaries and bills",
    "Savings goals with progress tracking",
    "Custom spending categories",
    "Dark mode & beautiful themes",
    "Export reports as CSV or PDF",
    "Gamified insights with badges and streaks"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 lg:px-8 flex h-16 items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:bg-accent"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          <div className="flex items-center gap-2">
            <Wallet className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl">PocketWise</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-cyan-50 to-teal-50 dark:from-emerald-950/20 dark:via-cyan-950/20 dark:to-teal-950/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Wallet className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Smart Budgeting <span className="gradient-accent bg-clip-text text-transparent">Made Simple</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Your all-in-one personal finance companion that helps you track income, control expenses, and reach your savings goals with clarity and powerful tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Join Waitlist
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Take Control of <span className="gradient-accent bg-clip-text text-transparent">Your Money</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you're managing daily spending, planning for big goals, or simply trying to understand where your money goes, 
              PocketWise gives you the clarity and tools you need to make smarter financial decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Powerful <span className="gradient-accent bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to manage your finances effectively, all in one beautiful app
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="card-elevated p-8 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Perfect For <span className="gradient-accent bg-clip-text text-transparent">Everyone</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                PocketWise is designed for anyone who wants better control over their finances
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {targetUsers.map((user, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-muted/30 rounded-lg">
                  <div className="w-3 h-3 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full"></div>
                  <span className="text-lg font-medium">{user}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Advanced <span className="gradient-accent bg-clip-text text-transparent">Capabilities</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Take your budgeting to the next level with powerful advanced features
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {advancedFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-4">
                  <Download className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="gradient-accent bg-clip-text text-transparent">Vision</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              PocketWise makes budgeting simple, insightful, and even fun. With powerful tools and clean visuals, 
              you'll always know exactly where your money goes — and how to make it work better for you.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Secure • Private • Powerful</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the waitlist to be among the first to experience the future of personal budgeting
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={() => navigate('/contact')}
            >
              Join Waitlist
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-emerald-600"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PocketWise;