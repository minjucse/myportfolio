import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Download, Menu, Mail, Phone } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // 1. Handle background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Handle active section detection (Spy Scroll)
  useEffect(() => {
    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 100;

      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleActiveSection);
    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  // 3. Smooth Scroll Handler
  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 dark:border-slate-700/50"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-1 cursor-pointer group"
          onClick={() => scrollToSection("#home")}
        >
          <span className="text-2xl font-bold text-slate-800 dark:text-slate-100 transition-transform group-hover:scale-105">
            Minju
          </span>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`text-sm font-medium transition-all relative py-1 ${activeSection === link.id
                ? "text-primary"
                : "text-slate-600 dark:text-slate-300 hover:text-primary"
                }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-in fade-in zoom-in duration-300" />
              )}
            </a>
          ))}
        </nav>

        {/* Desktop Action */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all">
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-slate-800">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] flex flex-col gap-8 pt-12">
            <div className="text-2xl font-bold text-center border-b pb-6">
              Minju<span className="text-primary">.</span>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`text-lg font-medium py-3 px-4 rounded-xl transition-colors ${activeSection === link.id
                    ? "bg-primary/10 text-primary"
                    : "text-slate-600 hover:bg-slate-100"
                    }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Bottom Section: Mobile CTA & Highlighted Badge */}
            <div className="mt-auto space-y-6 pb-8">
              <div className="space-y-4">
                {/* Theme Toggle Mobile */}
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>

                {/* Highlighted Status Badge */}
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-full text-xs font-semibold tracking-wide">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    AVAILABLE FOR PROJECTS
                  </div>
                </div>

                <Button className="w-full rounded-xl py-6 shadow-lg shadow-primary/20" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>

              {/* Contact Info */}
              <div className="text-center space-y-2">
                <p className="text-sm text-slate-500 flex items-center justify-center gap-2 hover:text-primary transition-colors cursor-pointer">
                  <Mail className="h-4 w-4" /> minjucse@gmail.com
                </p>
                <p className="text-sm text-slate-500 flex items-center justify-center gap-2 hover:text-primary transition-colors cursor-pointer">
                  <Phone className="h-4 w-4" /> 01683321990
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;