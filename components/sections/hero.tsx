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
                Praise Josiah
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Full-Stack & Blockchain Developer
            </h2>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              I specialize in building{' '}
              <span className="text-foreground font-semibold">scalable systems</span> and{' '}
              <span className="text-foreground font-semibold">blockchain solutions</span>, with a focus on{' '}
              <span className="text-foreground font-semibold">backend architecture</span> and systems design.
              Passionate about creating robust, efficient applications that solve real-world problems.
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
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl opacity-50 animate-pulse-slow -z-10" />

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-black dark:border-gray-400 shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Josiah Praise - Full-Stack Developer"
                  width={400}
                  height={400}
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-500 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
