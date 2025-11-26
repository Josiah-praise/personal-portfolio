'use client';

import { Marquee } from '@/components/ui/marquee';
import { cn } from '@/lib/utils';

const techStack = [
  // Row 1 - Frontend & Languages
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Solidity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
];

const techStackRow2 = [
  // Row 2 - Backend & Tools
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

function TechCard({ name, icon }: { name: string; icon: string }) {
  return (
    <div
      className={cn(
        "relative flex items-center gap-3 px-4 py-3 rounded-xl",
        "bg-white/10 dark:bg-white/5 backdrop-blur-md",
        "border border-white/20 dark:border-white/10",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        "hover:scale-105 hover:-translate-y-1",
        "cursor-default select-none"
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon}
        alt={name}
        className="w-8 h-8 object-contain"
        loading="lazy"
      />
      <span className="text-sm font-medium text-foreground whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
      
      <div className="relative">
        <div className="container mx-auto px-4 text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Tech Stack
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to build modern, scalable applications
          </p>
        </div>

        {/* Gradient fade on edges */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* First row - scrolls left */}
          <Marquee 
            pauseOnHover 
            className="[--duration:35s] [--gap:1rem] mb-4"
          >
            {techStack.map((tech) => (
              <TechCard key={tech.name} {...tech} />
            ))}
          </Marquee>

          {/* Second row - scrolls right */}
          <Marquee 
            pauseOnHover 
            reverse
            className="[--duration:40s] [--gap:1rem]"
          >
            {techStackRow2.map((tech) => (
              <TechCard key={tech.name} {...tech} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
