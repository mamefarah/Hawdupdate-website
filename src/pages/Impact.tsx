import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MapPin, Calendar } from "lucide-react";
import { achievements, timeline, sdgGoals } from "@/data/impact";
import Seo from "@/components/Seo";

const Impact = () => {
  return (
    <div className="min-h-screen">
      <Seo 
        title="Impact | Hawd Climate Guardian Initiative"
        description="See how Hawd Climate Guardian Initiative improves livelihoods through climate adaptation, reforestation, and water conservation in the Gedo Zone."
      />
      {/* Header Section */}
      <section className="py-16 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Impact</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Measurable results from our climate resilience initiatives in the Gedo Zone
          </p>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Achievements</h2>
            <p className="text-muted-foreground">Evidence-based results demonstrating real impact</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{achievement.title}</h3>
                    <div className="text-3xl font-bold text-primary mb-3">{achievement.unit}</div>
                  </div>
                </div>
                <Progress value={achievement.value} className="mb-3" />
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Focus */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Geographic Focus</h2>
            <p className="text-muted-foreground">Building resilience in climate-vulnerable regions</p>
          </div>
          <Card className="p-8 md:p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Location Details</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <span className="font-semibold text-foreground">Region:</span> Gedo Zone, Jubaland Region
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">District:</span> Dolow District
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Country:</span> Somalia
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Communities:</span> Pastoral and agro-pastoral
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Climate Context</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Gedo Zone is an arid to semi-arid region highly vulnerable to drought, desertification, and unpredictable rainfall patterns.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our interventions are specifically designed to address these unique environmental challenges while supporting traditional livelihoods and building community resilience.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Impact Timeline */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Impact Timeline</h2>
            <p className="text-muted-foreground">Our journey of creating positive change</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((event, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <Badge variant="outline" className="mb-2">
                      {event.date}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm">{event.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">UN Sustainable Development Goals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our work contributes directly to achieving multiple UN Sustainable Development Goals
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-5xl mx-auto">
            {sdgGoals.map((goal) => (
              <Card
                key={goal.number}
                className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
                  {goal.number}
                </div>
                <p className="text-xs font-medium leading-tight">{goal.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
