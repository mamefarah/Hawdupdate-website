import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone, Clock, Map } from "lucide-react";
import { CONTACT_INFO, partnerships } from "@/data/contact";
import ContactCard from "@/components/ContactCard";
import PartnershipSection from "@/components/PartnershipSection";
import ContactForm from "@/components/ContactForm";
import Seo from "@/components/Seo";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Contact Us | Hawd Climate Guardian Initiative"
        description="Reach Hawd Climate Guardian Initiative to discuss climate resilience work, partnerships, or community support in the Gedo Zone."
      />
      {/* Header Section */}
      <section className="py-16 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get in touch to learn more about our work or explore partnership
            opportunities
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ContactCard
              icon={MapPin}
              title="Office Location"
              content={
                <>
                  {CONTACT_INFO.address.district}
                  <br />
                  {CONTACT_INFO.address.region}
                  <br />
                  {CONTACT_INFO.address.country}
                </>
              }
            />

            <ContactCard
              icon={Mail}
              title="Email"
              content={
                <>
                  <a
                    href={`mailto:${CONTACT_INFO.email[0]}`}
                    className="text-primary font-semibold hover:underline break-all"
                  >
                    {CONTACT_INFO.email[0]}
                  </a>
                </>
              }
            />
            {CONTACT_INFO.phone.length > 0 && (
              <ContactCard
                icon={Phone}
                title="Phone"
                content={CONTACT_INFO.phone}
              />
            )}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <PartnershipSection partnerships={partnerships} />

      {/* Map & Working Hours */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Map className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Location</h3>
              </div>
              <div className="bg-secondary rounded-lg p-8 flex items-center justify-center h-48">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-3" />
                  <p className="font-semibold">{CONTACT_INFO.address.district}</p>
                  <p className="text-sm text-muted-foreground">
                    {CONTACT_INFO.address.region}, {CONTACT_INFO.address.country}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Working Hours</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-secondary rounded-lg p-6">
                  <p className="font-semibold mb-2">Office Hours</p>
                  <p className="text-muted-foreground">Sunday - Thursday</p>
                  <p className="text-muted-foreground">
                    8:00 AM - 5:00 PM (EAT)
                  </p>
                </div>
                <div className="bg-secondary rounded-lg p-6">
                  <p className="font-semibold mb-2">Field Operations</p>
                  <p className="text-muted-foreground">
                    Active throughout Dolow District
                  </p>
                  <p className="text-muted-foreground">Daily</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
