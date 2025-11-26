import Link from 'next/link';
import Image from 'next/image';
import { TechBadge } from './tech-badge';
import { ArrowRight, Plus } from 'lucide-react';
import { MagicCard } from '@/components/ui/magic-card';
import { BorderBeam } from '@/components/ui/border-beam';
import type { ProjectCard as ProjectCardType } from '@/lib/data/projects-data';

interface ProjectCardProps {
  project: ProjectCardType;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const displayTechnologies = project.technologies.slice(0, 4);
  const remainingCount = project.technologies.length - 4;

  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <MagicCard
        className="h-full overflow-hidden border border-black/10 dark:border-white/10"
        gradientColor="rgba(255,255,255,0.05)"
        gradientFrom="rgba(255,255,255,0.1)"
        gradientTo="rgba(255,255,255,0.05)"
        gradientOpacity={0.3}
      >
        <div className="relative h-full bg-white/20 dark:bg-black/20 backdrop-blur-sm">
          {/* Corner plus signs */}
          <Plus className="absolute -top-3 -left-3 h-6 w-6 text-black/70 dark:text-white/70 z-20" strokeWidth={1.5} />
          <Plus className="absolute -top-3 -right-3 h-6 w-6 text-black/70 dark:text-white/70 z-20" strokeWidth={1.5} />
          <Plus className="absolute -bottom-3 -left-3 h-6 w-6 text-black/70 dark:text-white/70 z-20" strokeWidth={1.5} />
          <Plus className="absolute -bottom-3 -right-3 h-6 w-6 text-black/70 dark:text-white/70 z-20" strokeWidth={1.5} />

          {/* Border beam on hover */}
          <BorderBeam
            size={200}
            duration={8}
            delay={0}
            colorFrom="rgba(0,0,0,0.3)"
            colorTo="rgba(255,255,255,0.3)"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />

          {/* Thumbnail */}
          <div className="relative aspect-video overflow-hidden bg-black/5 dark:bg-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <Image
              src={project.thumbnail}
              alt={`${project.title} project thumbnail`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-foreground/80 transition-colors flex items-center justify-between">
                <span>{project.title}</span>
                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </h3>
              <p className="text-muted-foreground line-clamp-2 text-sm">
                {project.description}
              </p>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2">
              {displayTechnologies.map((tech) => (
                <TechBadge key={tech} technology={tech} />
              ))}
              {remainingCount > 0 && (
                <span className="border border-black/10 dark:border-white/10 bg-white/20 dark:bg-black/20 text-muted-foreground px-3 py-1 text-xs">
                  +{remainingCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </MagicCard>
    </Link>
  );
}
