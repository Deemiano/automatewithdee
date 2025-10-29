import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">Dennis (Dee) Muchiri</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Tech Virtual Assistant specializing in AI, automation, and workflow optimization for busy founders
              and executives.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/dennismuchirim"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:dennismuchirim@gmail.com"
                className="hover:text-accent transition-colors"
                aria-label="Email contact"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "#about")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "#services")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  onClick={(e) => scrollToSection(e, "#packages")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => scrollToSection(e, "#portfolio")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get Started</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Ready to transform your operations with AI and automation?
            </p>
            <a
              href="https://calendly.com/dennismuchirim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:shadow-glow transition-all"
            >
              Book Free Discovery Call
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            {/* Left - Copyright */}
            <p className="text-sm text-primary-foreground/60 order-2 md:order-1">
              © {currentYear} Dennis Muchiri. All rights reserved.
            </p>

            {/* Right - Legal Links */}
            <div className="flex gap-4 text-sm order-1 md:order-2">
              <a
                href="#hero"
                onClick={(e) => scrollToSection(e, "#hero")}
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#hero"
                onClick={(e) => scrollToSection(e, "#hero")}
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#hero"
                onClick={(e) => scrollToSection(e, "#hero")}
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                Confidentiality Agreement
              </a>
            </div>
          </div>

          {/* Center - Built by */}
          <p className="text-center text-sm text-primary-foreground/60">
            Built with 💙 by Dee Muchiri
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
