import { Youtube, Linkedin, Instagram, Twitter, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Projects", href: "/#projects" }
  ];

  const socialLinks = [
    { name: "YouTube", icon: Youtube, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" }
  ];

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">
              <span className="gradient-hero bg-clip-text text-transparent">neurAila</span>
            </h3>
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Empowering Africa through ethical AI innovation. Building intelligent 
              systems that solve real challenges and create opportunities for growth.
            </p>
            <div className="flex items-center space-x-2 text-background/80">
              <Mail className="w-5 h-5" />
              <span className="text-sm break-all">neurailaintelligencegroup@gmail.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => {
                      if (link.href.startsWith('/#')) {
                        navigate('/');
                        setTimeout(() => {
                          const element = document.querySelector(link.href.substring(1));
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      } else {
                        navigate(link.href);
                      }
                    }}
                    className="text-background/80 hover:text-primary transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm mb-4 md:mb-0">
              © 2025 neurAila Intelligence Group. All rights reserved.
            </p>
            <p className="text-background/60 text-sm">
              Made with ❤️ in South Africa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;