'use client';

import { HyperText } from '@/components/ui/hyper-text';
import { BlurFade } from '@/components/ui/blur-fade';
import type { ProjectFrontmatter } from '@/lib/types/project';

interface ProjectHeaderProps {
  project: ProjectFrontmatter;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  const formatDate = (date: string) => {
    if (date === 'Present') return 'Present';
    const [year, month] = date.split('-');
    return new Date(parseInt(year), parseInt(month) - 1).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <header className="mb-12">
      {/* Category badge */}
      <BlurFade delay={0.1}>
        <span className="inline-block mb-6 px-4 py-1.5 text-sm font-medium border border-black/15 dark:border-white/15 bg-white/30 dark:bg-black/30 backdrop-blur-sm text-foreground">
          {project.category}
        </span>
      </BlurFade>

      {/* Title with HyperText */}
      <BlurFade delay={0.15}>
        <HyperText
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
          duration={800}
          animateOnHover={false}
        >
          {project.title}
        </HyperText>
      </BlurFade>

      {/* Description */}
      <BlurFade delay={0.2}>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
          {project.description}
        </p>
      </BlurFade>

      {/* Date */}
      <BlurFade delay={0.25}>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
          <span className="px-3 py-1 border border-black/10 dark:border-white/10 bg-white/20 dark:bg-black/20 backdrop-blur-sm">
            {formatDate(project.startDate)} → {formatDate(project.endDate)}
          </span>
        </div>
      </BlurFade>

      {/* Technologies */}
      <BlurFade delay={0.3}>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm font-medium border border-black/15 dark:border-white/15 bg-white/30 dark:bg-black/30 text-foreground backdrop-blur-sm hover:bg-white/50 dark:hover:bg-black/50 transition-colors"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </BlurFade>
    </header>
  );
}
