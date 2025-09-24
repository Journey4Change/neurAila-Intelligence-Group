import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import neurailaLogo from "@/assets/neuraila-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/#projects" },
    { name: "Vision", href: "/#vision" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = (item: { name: string; href: string }) => {
    setIsMenuOpen(false);
    
    if (item.href.startsWith('/#')) {
      // If we're already on the home page, just scroll
      if (location.pathname === '/') {
        const elementId = item.href.substring(2); // Remove /#
        document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate to home page first, then scroll
        navigate('/');
        setTimeout(() => {
          const elementId = item.href.substring(2);
          document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Regular navigation
      navigate(item.href);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleGetInvolvedClick = () => {
    setIsMenuOpen(false);
    navigate('/contact');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center space-x-3" onClick={handleLogoClick}>
            <img 
              src={neurailaLogo} 
              alt="neurAila Intelligence Group Logo" 
              className="h-10 w-10"
            />
            <h1 className="text-xl font-bold gradient-hero bg-clip-text text-transparent">
              neurAila Intelligence Group
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              className="btn-hero"
              onClick={handleGetInvolvedClick}
            >
              Get Involved
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border/50">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button 
                  className="btn-hero w-full"
                  onClick={handleGetInvolvedClick}
                >
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;