import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section
      aria-label="Hero"
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Josiah Praise
            </h1>
            <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6">
              Full-Stack Developer | React & TypeScript Specialist
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              I build modern web applications with a focus on performance,
              accessibility, and exceptional user experiences. Passionate about
              creating elegant solutions to complex problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg">
                <Link href="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <Image
                src="/images/avatar.svg"
                alt="Josiah Praise - Full-Stack Developer"
                width={400}
                height={400}
                priority
                className="rounded-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
