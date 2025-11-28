import { Card } from "@/components/ui/card";
import { Building, User } from "lucide-react";
import { values } from "@/data/about";
import Seo from "@/components/Seo";

const About = () => {
  const aboutData = {
    title: "About Hawd Climate Guardian",
    body: [
      "Founded in 2023, Hawd Climate Guardian was established in response to the critical climate vulnerability affecting the Dolow District in the Gedo Zone of Somalia.",
      "Our strategy centers on climate-smart agriculture and water conservation, working hand-in-hand with local communities, authorities, and international partners to build a resilient and sustainable future for the Gedo Zone."
    ]
  };

  const teamMembers = [
    {
      _id: "1",
      name: "Abdi Mohamed",
      role: "Executive Director",
      bio: "Leading the organization with over 10 years of experience in community development.",
      photoUrl: null
    },
    {
      _id: "2",
      name: "Fatima Ali",
      role: "Program Manager",
      bio: "Expert in sustainable agriculture and project management.",
      photoUrl: null
    },
    {
      _id: "3",
      name: "Hassan Nur",
      role: "Field Coordinator",
      bio: "Coordinating on-ground activities and community engagement.",
      photoUrl: null
    }
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title="About Us | Hawd Climate Guardian Initiative"
        description="Meet the team and story behind Hawd Climate Guardian Initiative, building climate resilience and sustainable futures across Somalia's Gedo Zone."
      />
      {/* Header Section */}
      <section className="py-16 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {aboutData.title}
          </h1>
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
              {aboutData.body.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
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

      {/* Team */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated specialists bringing expertise in climate resilience, agriculture, and community development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member._id} className="p-6 text-center hover:shadow-md transition-shadow">
                <div className="bg-primary/10 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-3 overflow-hidden">
                  {member.photoUrl ? (
                    <img src={member.photoUrl} alt={member.name} loading="lazy" className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <User className="h-8 w-8 text-primary" />
                  )}
                </div>
                <p className="font-semibold">{member.name}</p>
                <p className="text-sm text-muted-foreground">{member.role}</p>
                {member.bio && <p className="text-xs text-muted-foreground mt-2">{member.bio}</p>}
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
