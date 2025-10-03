'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Loader2, Mail, MessageSquare, User } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Convert FormData to JSON
    const object: Record<string, string> = {};
    formData.forEach((value, key) => {
      object[key] = value.toString();
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(object),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        console.error('Form submission failed:', data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Web3Forms Access Key */}
      <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />

      {/* Honeypot for spam protection */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name" className="flex items-center gap-2">
          <User className="w-4 h-4" />
          Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
          disabled={isSubmitting}
          className="w-full"
        />
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          required
          disabled={isSubmitting}
          className="w-full"
        />
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Label htmlFor="message" className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4" />
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project or idea..."
          required
          disabled={isSubmitting}
          className="w-full min-h-[150px]"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400">
          <p className="font-medium">Message sent successfully!</p>
          <p className="text-sm mt-1">Thank you for reaching out. I&apos;ll get back to you soon.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400">
          <p className="font-medium">Failed to send message</p>
          <p className="text-sm mt-1">Please try again or contact me directly via email.</p>
        </div>
      )}
    </form>
  );
}
