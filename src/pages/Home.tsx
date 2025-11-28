import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Target, Eye, MapPin } from "lucide-react";
import { statistics } from "@/data/home";
import Seo from "@/components/Seo";
import heroImage from "@/assets/hero-landscape.jpg";
import agricultureImage from "@/assets/agriculture.jpg";
import reforestationImage from "@/assets/reforestation.jpg";
import waterImage from "@/assets/water-conservation.jpg";
import communityImage from "@/assets/community.jpg";

const Home = () => {
  const homepageData = {
    headline: "Building Climate Resilience in Somalia",
    subheadline: "Hawd Climate Guardian fosters sustainability and protects natural resources in the Gedo Zone through climate-smart adaptation",
    heroImageUrl: heroImage
  };

  const missionData = {
    title: "Our Mission",
    description: "Hawd Climate Guardian fosters resilience and sustainability across the Gedo Zone."
  };

  const visionData = {
    title: "Our Vision",
    description: "We work to create a climate-resilient Gedo zone where communities thrive."
  };

  const services = [
    {
      _id: "1",
      name: "Climate-Smart Agriculture",
      description: "Implementing sustainable farming practices to increase yields and resilience.",
      iconUrl: null
    },
    {
      _id: "2",
      name: "Water Conservation",
      description: "Developing infrastructure for efficient water use and management.",
      iconUrl: null
    },
    {
      _id: "3",
      name: "Reforestation",
      description: "Restoring local ecosystems through community-led tree planting initiatives.",
      iconUrl: null
    }
  ];

  const projects = [
    {
      _id: "1",
      title: "Dolow Community Garden",
      location: "Dolow",
      description: "A community-managed garden providing fresh produce and training.",
      imageUrl: agricultureImage
    },
    {
      _id: "2",
      title: "Water Pan Rehabilitation",
      location: "Gedo Zone",
      description: "Restoring vital water sources for livestock and agriculture.",
      imageUrl: waterImage
    },
    {
      _id: "3",
      title: "Tree Planting Campaign",
      location: "Various Locations",
      description: "Planting 10,000 trees to combat desertification.",
      imageUrl: reforestationImage
    }
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title="Hawd Climate Guardian Initiative | Building climate resilience in the Gedo Zone"
        description="Learn about Hawd Climate Guardian Initiative's programs advancing climate adaptation and resilient livelihoods across Somalia's Gedo Zone."
      />
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${homepageData.heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container text-center text-white space-y-6 px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {homepageData.headline}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            {homepageData.subheadline}
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
              <h2 className="text-2xl font-bold mb-4">{missionData.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {missionData.description}
              </p>
            </Card>
            <Card className="p-8 border-l-4 border-l-primary">
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">{visionData.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {visionData.description}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service._id} className="p-6 hover:shadow-lg transition-shadow group">
                <div className="mb-4 flex items-center gap-3">
                  {service.iconUrl ? (
                    <img
                      src={service.iconUrl}
                      alt={service.name}
                      loading="lazy"
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-semibold">
                      {service.name.slice(0, 1)}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project._id} className="p-6 hover:shadow-lg transition-shadow">
                {project.imageUrl && (
                  <div className="h-40 w-full rounded-lg overflow-hidden mb-4">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{project.location}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
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
              <img src={agricultureImage} alt="Climate-smart agriculture" width={1024} height={768} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white font-semibold p-6">Climate-Smart Agriculture</p>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group">
              <img src={reforestationImage} alt="Reforestation efforts" width={1024} height={768} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white font-semibold p-6">Community Reforestation</p>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group">
              <img src={waterImage} alt="Water conservation" width={1024} height={768} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-white font-semibold p-6">Water Conservation Infrastructure</p>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden group">
              <img src={communityImage} alt="Community engagement" width={1024} height={768} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
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
        style={{ backgroundImage: `url(${homepageData.heroImageUrl})` }}
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
