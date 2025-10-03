import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';
import { ParticlesBackground } from '@/components/effects/particles-background';

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative flex items-center justify-center overflow-hidden min-h-screen"
    >
      <ParticlesBackground />
      <div className="container relative mx-auto px-4 py-20 sm:py-32 lg:py-40 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Available for opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Josiah Praise
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Full-Stack Developer
            </h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              I craft modern web applications with a focus on{' '}
              <span className="text-foreground font-semibold">performance</span>,{' '}
              <span className="text-foreground font-semibold">accessibility</span>, and{' '}
              <span className="text-foreground font-semibold">user experience</span>.
              Passionate about turning complex problems into elegant solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/projects">
                  View My Work
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2">
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-6">
              <a
                href="https://github.com/josiah-praise"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/praisejosiah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/Praise_JC_AFK"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://discord.com/users/1103617696190435380"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Discord"
              >
                <SiDiscord className="w-5 h-5" />
              </a>
              <a
                href="mailto:praisechinonso21@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in-delay">
            <div className="relative animate-float">
              {/* Rotating gradient border */}
              <div className="absolute -inset-1 rounded-full animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gradient-conic opacity-75 blur-sm" />
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl opacity-50 animate-pulse-slow" />

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-black shadow-2xl">
                <Image
                  src="/images/avatar.svg"
                  alt="Josiah Praise - Full-Stack Developer"
                  width={400}
                  height={400}
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
