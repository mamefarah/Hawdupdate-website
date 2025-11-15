import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import NavLink from "./NavLink";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/programs", label: "Programs" },
    { to: "/impact", label: "Impact" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center hover:opacity-90 transition-opacity"
          aria-label="Home - Hawd Climate Guardian"
        >
          <img 
            src={logo} 
            alt="Hawd Climate Guardian Logo"
            className="h-12 md:h-14 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} label={link.label} />
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden border-t border-border bg-background animate-fade-in"
        >
          <nav className="container flex flex-col space-y-1 py-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                label={link.label}
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
