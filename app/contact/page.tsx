import { socialLinks } from '@/lib/data/social-links';
import { ContactForm } from '@/components/contact/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';

export const metadata = {
  title: 'Contact | Praise Josiah',
  description: 'Get in touch with me to discuss new projects, creative ideas, or opportunities to collaborate.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Let&apos;s Work Together
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. Drop me a message and I&apos;ll respond within 24 hours.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Social Links - Left Side */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Connect Section */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-foreground">Connect With Me</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Prefer social media? Connect with me on any of these platforms.
                </p>
                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map((link) => {
                    const Icon = link.icon === 'Mail' ? Mail :
                                link.icon === 'Linkedin' ? Linkedin :
                                link.icon === 'Github' ? Github :
                                link.icon === 'Twitter' ? Twitter :
                                link.icon === 'Discord' ? SiDiscord : Mail;

                    const isEmail = link.platform === 'Email';

                    return (
                      <a
                        key={link.platform}
                        href={link.url}
                        target={isEmail ? undefined : '_blank'}
                        rel={isEmail ? undefined : 'noopener noreferrer'}
                        className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors border border-border/50 hover:border-primary/50"
                        aria-label={link.platform}
                        title={link.platform}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Info Card */}
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Response Time</p>
                      <p className="text-lg font-semibold text-foreground">Within 24 hours</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Availability</p>
                      <p className="text-lg font-semibold text-foreground">Open to opportunities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-2">
            <div className="space-y-1 mb-6">
              <h2 className="text-2xl font-semibold text-foreground">Send Me a Message</h2>
              <p className="text-base text-muted-foreground">
                Fill out the form below with your details and I&apos;ll get back to you as soon as possible
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
