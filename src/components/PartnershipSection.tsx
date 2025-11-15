import { Card } from "@/components/ui/card";
import { Handshake } from "lucide-react";

const PartnershipSection = ({ partnerships }) => (
  <section className="py-16 bg-secondary">
    <div className="container">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <Handshake className="h-12 w-12 text-primary" />
            <h2 className="text-3xl font-bold">Partnership Opportunities</h2>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Hawd Climate Guardian welcomes partnerships with organizations and
            individuals committed to climate resilience and sustainable
            development. We actively collaborate with:
          </p>
          <ul className="space-y-3">
            {partnerships.map((partnership, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-3 mt-1 flex-shrink-0">●</span>
                <span className="text-muted-foreground">{partnership}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-6 leading-relaxed">
            If you're interested in partnering with us or supporting our mission,
            please reach out via email or phone to discuss collaboration
            opportunities.
          </p>
        </Card>
      </div>
    </div>
  </section>
);

export default PartnershipSection;
