import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-gray-100">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Hawd Climate Guardian"
              className="h-16 md:h-20 w-auto mb-4"
              loading="lazy"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building climate resilience and promoting sustainable practices in Gedo Zone, Somalia.
            </p>
            <p className="text-xs text-muted-foreground">
              Founded February 12, 2023
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/programs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Programs
              </Link>
              <Link to="/impact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Impact
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Dolow District, Gedo Region, Jubaland, Somalia
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  info@Hawdclimateguardian.org
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>+252 615 580 999</p>
                  <p>+252 618 893 536</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Our Mission</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hawd Climate Guardian fosters resilience and sustainability, protecting the Gedo Zone's natural resources for a sustainable future through climate-smart adaptation.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hawd Climate Guardian. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
