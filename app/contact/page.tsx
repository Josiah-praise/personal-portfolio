import { socialLinks } from '@/lib/data/social-links';
import { SocialLinkButton } from '@/components/sections/social-link-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Contact | Josiah Praise',
  description: 'Get in touch with me to discuss new projects, creative ideas, or opportunities to collaborate.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let&apos;s connect!
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 mb-12">
          {socialLinks.map((link) => (
            <SocialLinkButton key={link.platform} link={link} />
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
            <CardDescription>
              A contact form will be available soon
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              In the meantime, feel free to reach out via email or connect with me on LinkedIn. I typically respond within 24 hours.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
