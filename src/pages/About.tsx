import { Card } from "@/components/ui/card";
import { Building, User } from "lucide-react";
import { values, specialists } from "@/data/about";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="About Us | Hawd Climate Guardian"
        description="Learn about Hawd Climate Guardian, a community-driven Somali organization building climate resilience in the Gedo Zone through sustainable practices and community empowerment."
        keywords="Hawd Climate Guardian, about us, climate resilience Somalia, Gedo Zone NGO, sustainable development"
      />
      {/* Header Section */}
      <section className="py-16 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Hawd Climate Guardian</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A community-driven, local Somali organization building climate resilience in the Gedo Zone
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <Card className="p-8 md:p-12 border-l-4 border-l-primary">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded on <span className="font-semibold text-foreground">February 12, 2023</span>, Hawd Climate Guardian was established in response to the critical climate vulnerability affecting the Dolow District in the Gedo Zone of Somalia.
              </p>
              <p>
                Our strategy centers on <span className="font-semibold text-foreground">Climate-Smart Agriculture</span> and <span className="font-semibold text-foreground">water conservation</span>, working hand-in-hand with local communities, authorities, and international partners to build a resilient and sustainable future for the Gedo Zone.
              </p>
              <p>
                We believe in collaborative approaches that respect local knowledge, empower communities, and create lasting positive change through innovation and partnership.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and shape our commitment to the communities we serve
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <value.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Governance Structure</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ensuring accountability, transparency, and effective leadership in all our operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center">
              <Building className="h-14 w-14 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Board of Directors</h3>
              <p className="text-muted-foreground">
                Provides strategic oversight, ensures compliance with regulations, and guides organizational direction
              </p>
            </Card>
            <Card className="p-8 text-center">
              <User className="h-14 w-14 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Executive Director</h3>
              <p className="text-muted-foreground">
                Manages daily operations, oversees program implementation, and builds strategic partnerships
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Specialists */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated specialists bringing expertise in climate resilience, agriculture, and community development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {specialists.map((specialist, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow">
                <div className="bg-primary/10 rounded-full p-3 w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium text-sm">{specialist}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16">
        <div className="container">
          <Card className="p-8 md:p-12 bg-primary/5 border-primary">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Commitment</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <p className="text-center">
                Hawd Climate Guardian is committed to the highest standards of transparency, accountability, and community-centered decision-making.
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Annual external financial auditing to ensure fiscal responsibility</li>
                <li>Transparent financial management practices</li>
                <li>Community participation in all major decisions</li>
                <li>Regular impact assessments and reporting</li>
                <li>Adherence to Do No Harm principles</li>
                <li>Strong partnerships with local and international organizations</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
