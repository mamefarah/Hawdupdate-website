import { Card } from "@/components/ui/card";

const ContactCard = ({ icon: Icon, title, content }) => (
  <Card className="p-8 text-center hover:shadow-lg transition-shadow">
    <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
      <Icon className="h-8 w-8 text-primary" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground">{content}</p>
  </Card>
);

export default ContactCard;
