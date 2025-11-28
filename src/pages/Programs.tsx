import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Seo from "@/components/Seo";

const Programs = () => {
  const services = [
    {
      _id: "1",
      name: "Climate-Smart Agriculture",
      description: "We implement sustainable farming techniques that adapt to changing climate conditions. This includes drought-resistant crop varieties, efficient irrigation systems, and soil conservation methods to ensure food security.",
      iconUrl: null
    },
    {
      _id: "2",
      name: "Water Conservation",
      description: "Our water conservation initiatives focus on harvesting rainwater, rehabilitating water pans, and establishing efficient water distribution systems to support both agriculture and livestock.",
      iconUrl: null
    },
    {
      _id: "3",
      name: "Reforestation",
      description: "We lead community-driven reforestation projects to restore degraded lands, prevent soil erosion, and create micro-climates that support biodiversity and agriculture.",
      iconUrl: null
    },
    {
      _id: "4",
      name: "Community Empowerment",
      description: "We provide training and capacity building for local communities, focusing on women and youth, to ensure long-term sustainability of climate adaptation strategies.",
      iconUrl: null
    }
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title="Programs | Hawd Climate Guardian Initiative"
        description="Explore Hawd Climate Guardian Initiative programs for climate-smart agriculture, water conservation, reforestation, and community empowerment in the Gedo Zone."
      />
      {/* Header Section */}
      <section className="py-16 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive climate adaptation strategies designed for the unique challenges of the Gedo Zone
          </p>
        </div>
      </section>

      {/* Programs Detail */}
      <section className="py-16">
        <div className="container space-y-12">
          {services.map((program, index) => (
            <Card
              key={program._id}
              className={`p-8 md:p-10 hover:shadow-xl transition-shadow ${index % 2 === 0 ? "border-l-4 border-l-primary" : "border-r-4 border-r-primary"
                }`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-primary/10 rounded-xl p-4 h-16 w-16 flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {(program.name || "P").slice(0, 2)}
                    </span>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">{program.name}</h2>
                    <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                  </div>
                  <div>
                    <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Program alignment
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Integrated Approach */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <Card className="p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Integrated Approach</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              <p>
                All our programs work together synergistically to create comprehensive climate resilience. Climate-smart agriculture is supported by reliable water infrastructure, enhanced by reforestation efforts, powered by renewable energy, guided by inclusive participation, and strengthened through continuous capacity building.
              </p>
              <p>
                This integrated approach ensures that communities don't just adapt to climate change—they thrive despite it. Our proven capacity in project implementation, combined with strong community partnerships and technical expertise, enables us to deliver measurable results that improve livelihoods and protect the environment.
              </p>
              <p className="font-semibold text-foreground">
                Every program is community-driven, ensuring local ownership, cultural sensitivity, and long-term sustainability.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Programs;
