'use client';

import { useRef } from 'react';

export function TechStack() {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Prisma', category: 'Backend' },
    { name: 'Git', category: 'Tools' },
  ];

  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies I use to build modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechCard({ tech, index }: { tech: { name: string; category: string }; index: number }) {
  const overlayRef = useRef<HTMLDivElement>(null);

  const animateIn = () => {
    const el = overlayRef.current;
    if (!el) return;

    el.style.transition = 'none';
    el.style.backgroundPosition = '-100% -100%, 0 0';
    el.style.transition = '650ms ease';
    el.style.backgroundPosition = '100% 100%, 0 0';
  };

  const animateOut = () => {
    const el = overlayRef.current;
    if (!el) return;

    el.style.transition = '650ms ease';
    el.style.backgroundPosition = '-100% -100%, 0 0';
  };

  return (
    <div
      className="group relative p-6 rounded-lg border-2 border-border hover:border-primary/50 bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg animate-fade-in overflow-hidden cursor-pointer"
      style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      <div className="text-center relative z-10">
        <p className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
          {tech.name}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          {tech.category}
        </p>
      </div>
      {/* Glare hover effect */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(-45deg, hsla(0,0%,0%,0) 60%, rgba(255, 255, 255, 0.3) 70%, hsla(0,0%,0%,0) 100%)',
          backgroundSize: '250% 250%, 100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '-100% -100%, 0 0',
        }}
      />
    </div>
  );
}
