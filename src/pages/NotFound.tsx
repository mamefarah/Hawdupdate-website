import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, ArrowLeft, Search } from "lucide-react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary px-4">
      <SEO 
        title="Page Not Found | Hawd Climate Guardian"
        description="The page you're looking for doesn't exist."
      />
      <Card className="max-w-lg w-full p-8 md:p-12 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
            <Search className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Popular pages:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link to="/about">
              <Button variant="link" size="sm">About Us</Button>
            </Link>
            <Link to="/programs">
              <Button variant="link" size="sm">Programs</Button>
            </Link>
            <Link to="/impact">
              <Button variant="link" size="sm">Our Impact</Button>
            </Link>
            <Link to="/contact">
              <Button variant="link" size="sm">Contact</Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
