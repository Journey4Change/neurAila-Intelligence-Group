import { Phone, Mail, MessageCircle, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      action: "+27 82 813 4960",
      href: "tel:+27828134960",
      color: "text-success"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      action: "neurailaintelligencegroup@gmail.com",
      href: "mailto:neurailaintelligencegroup@gmail.com",
      color: "text-primary"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick messaging support",
      action: "Chat on WhatsApp",
      href: "https://wa.me/27828134960",
      color: "text-success"
    }
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      href: "https://facebook.com/neurailaintelligence",
      color: "hover:text-[#1877F2]"
    },
    {
      icon: Twitter,
      name: "X (Twitter)",
      href: "https://x.com/neuraila_ai",
      color: "hover:text-foreground"
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://instagram.com/neurailaintelligence",
      color: "hover:text-[#E4405F]"
    },
    {
      icon: MessageCircle,
      name: "TikTok",
      href: "https://tiktok.com/@neurailaintelligence",
      color: "hover:text-foreground"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/20 to-primary/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            <span className="gradient-hero bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready to transform education with AI? Let's discuss how we can work together 
            to make learning accessible for every South African learner.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="card-elevated hover-lift hover-glow group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <method.icon className={`w-12 h-12 mx-auto ${method.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {method.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full btn-outline-hero h-auto min-h-10 whitespace-normal break-all text-left py-3"
                    onClick={() => window.open(method.href, '_blank')}
                    title={method.action}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Info Section */}
          <Card className="card-glow">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">
                    <span className="gradient-accent bg-clip-text text-transparent">
                      Let's Build the Future Together
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Whether you're an educator, student, investor, or technology enthusiast, 
                    we'd love to hear from you. Join us in revolutionizing education through 
                    artificial intelligence.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium">+27 82 813 4960</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="text-foreground font-medium text-sm sm:text-base break-words">neurailaintelligencegroup@gmail.com</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-heading font-semibold mb-8">
                    Follow Our Journey
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {socialMedia.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className={`h-16 flex flex-col items-center gap-2 hover-lift ${social.color} transition-colors duration-300`}
                        onClick={() => window.open(social.href, '_blank')}
                      >
                        <social.icon className="w-6 h-6" />
                        <span className="text-sm">{social.name}</span>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the neurAila community and help us democratize quality education 
              across South Africa through innovative AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-hero text-lg px-8 py-3"
                onClick={() => window.open("mailto:neurailaintelligencegroup@gmail.com", '_blank')}
              >
                Send Us an Email
              </Button>
              <Button 
                variant="outline"
                className="btn-outline-hero text-lg px-8 py-3"
                onClick={() => window.open("https://wa.me/27828134960", '_blank')}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;