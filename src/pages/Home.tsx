import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Target, Eye, MapPin } from "lucide-react";
import { statistics } from "@/data/home";
import {
  fetchHomepage,
  fetchMission,
  fetchVision,
  fetchServices,
  fetchProjects,
  HomepageData,
  MissionDocument,
  VisionDocument,
  ServiceItem,
  ProjectItem,
} from "@/lib/sanityQueries";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-landscape.jpg";
import agricultureImage from "@/assets/agriculture.jpg";
import reforestationImage from "@/assets/reforestation.jpg";
import waterImage from "@/assets/water-conservation.jpg";
import communityImage from "@/assets/community.jpg";

const Home = () => {
  const [homepageData, setHomepageData] = useState<HomepageData | null>(null);
  const [missionData, setMissionData] = useState<MissionDocument | null>(null);
  const [visionData, setVisionData] = useState<VisionDocument | null>(null);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetchHomepage(),
      fetchMission(),
      fetchVision(),
      fetchServices(),
      fetchProjects(),
    ])
      .then(([home, mission, vision, servicesResult, projectsResult]) => {
        setHomepageData(home);
        setMissionData(mission);
        setVisionData(vision);
        setServices(servicesResult);
        setProjects(projectsResult);
      })
      .catch((err) => {
        console.error("Failed to load Sanity content for home", err);
        setError("Content failed to load. Please try again.");
      })
      .finally(() => setLoading(false));
  }, []);

  const heroBackground = homepageData?.heroImageUrl || heroImage;
  const missionDescription =
    missionData?.description ||
    "Hawd Climate Guardian fosters resilience and sustainability across the Gedo Zone.";
  const visionDescription =
    visionData?.description ||
    "We work to create a climate-resilient Gedo zone where communities thrive.";

  return (
    <div className="min-h-screen">
      <SEO />
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container text-center text-white space-y-6 px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {homepageData?.headline || "Building Climate Resilience in Somalia"}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            {homepageData?.subheadline ||
              "Hawd Climate Guardian fosters sustainability and protects natural resources in the Gedo Zone through climate-smart adaptation"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/impact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Our Impact
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-black backdrop-blur-sm">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {error && (
        <div className="bg-destructive/10 text-destructive text-center py-3">
          {error}
        </div>
      )}

      {/* Statistics Section */}
      <section className="py-16 bg-secondary" aria-label="Our Impact Statistics">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in">
                <stat.icon className="h-10 w-10 mx-auto text-primary mb-3" aria-hidden="true" />
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-l-4 border-l-primary">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">{missionData?.title || "Our Mission"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {missionDescription}
              </p>
            </Card>
            <Card className="p-8 border-l-4 border-l-primary">
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">{visionData?.title || "Our Vision"}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {visionDescription}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive climate adaptation strategies designed for the unique challenges of the Gedo Zone
            </p>
          </div>
          {loading && <p className="text-center text-muted-foreground">Loading programs...</p>}
          {!loading && services.length === 0 && (
            <p className="text-center text-muted-foreground">No programs have been published yet.</p>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service._id} className="p-6 hover:shadow-lg transition-shadow group">
                <div className="mb-4 flex items-center gap-3">
                  {service.iconUrl ? (
                    <img
                      src={service.iconUrl}
                      alt={service.name || "Program icon"}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      {(service.name || "P").slice(0, 1)}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold">{service.name || "Program"}</h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description || "Details coming soon."}
                </p>
                <Link to="/programs" className="text-primary text-sm font-medium inline-flex items-center group-hover:underline">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recent and featured initiatives powered by Hawd Climate Guardian
            </p>
          </div>
          {loading && <p className="text-center text-muted-foreground">Loading projects...</p>}
          {!loading && projects.length === 0 && (
            <p className="text-center text-muted-foreground">No projects have been published yet.</p>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project._id} className="p-6 hover:shadow-lg transition-shadow">
                {project.imageUrl && (
                  <div className="h-40 w-full rounded-lg overflow-hidden mb-4">
                    <img
                      src={project.imageUrl}
                      alt={project.title || "Project image"}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location || "Location TBC"}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title || "Project"}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description || "Details coming soon."}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Gallery */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-muted-foreground">See the change we're making in communities</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group">
              <img src={agricultureImage} alt="Climate-smart agriculture" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white font-semibold p-6">Climate-Smart Agriculture</p>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group">
              <img src={reforestationImage} alt="Reforestation efforts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white font-semibold p-6">Community Reforestation</p>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group">
              <img src={waterImage} alt="Water conservation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white font-semibold p-6">Water Conservation Infrastructure</p>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group">
              <img src={communityImage} alt="Community engagement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white font-semibold p-6">Community Empowerment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Building a Sustainable Future
          </h2>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
