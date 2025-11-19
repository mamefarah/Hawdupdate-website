import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, User, MessageSquare, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);

    // TODO: In production, send this payload to contact@hawdclimateguardian.org via a backend/email service.
    // try {
    //   await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });
    // } catch (error) {
    //   toast.error("Failed to send message. Please try again.");
    // }
  };

  return (
    <Card className="p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
        <p className="text-muted-foreground">
          Fill out the form below and we'll get back to you as soon as possible
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center gap-2">
            <User className="h-4 w-4 text-primary" />
            Full Name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            Email Address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-primary" />
            Subject *
          </Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            required
            placeholder="Partnership Inquiry"
            value={formData.subject}
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Tell us more about your inquiry..."
            value={formData.message}
            onChange={handleChange}
            className="w-full min-h-[150px]"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin mr-2">⏳</span>
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
