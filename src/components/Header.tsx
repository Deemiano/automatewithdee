import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Tools", href: "#tools" },
    { name: "Packages", href: "#packages" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Skills", href: "#competencies" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-medium" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="flex items-center gap-3 text-xl font-bold text-primary hover:text-accent transition-colors group"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-green flex items-center justify-center text-navy font-black text-lg tracking-tighter shadow-[0_0_20px_rgba(168,255,96,0.4)] group-hover:shadow-[0_0_30px_rgba(168,255,96,0.6)] transition-all duration-300">
              DM
            </div>
            <span>Dennis Muchiri - Tech VA</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="cta"
              size="sm"
              onClick={() => window.open("https://calendly.com/dennismuchirim", "_blank")}
            >
              Book Free Call
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button
                variant="cta"
                className="w-full mt-2"
                onClick={() => window.open("https://calendly.com/dennismuchirim", "_blank")}
              >
                Book Free Call
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
