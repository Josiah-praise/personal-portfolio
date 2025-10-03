import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TechBadge } from './tech-badge';
import { ArrowRight } from 'lucide-react';
import type { ProjectCard as ProjectCardType } from '@/lib/data/projects-data';

interface ProjectCardProps {
  project: ProjectCardType;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const displayTechnologies = project.technologies.slice(0, 4);
  const remainingCount = project.technologies.length - 4;

  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card className="h-full hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden border-2 hover:border-primary/50">
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-secondary/50 to-secondary">
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            <Image
              src={project.thumbnail}
              alt={`${project.title} project thumbnail`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div>
            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </CardTitle>
            <CardDescription className="mb-4 line-clamp-2 text-base">
              {project.description}
            </CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            {displayTechnologies.map((tech) => (
              <TechBadge key={tech} technology={tech} />
            ))}
            {remainingCount > 0 && (
              <span className="px-3 py-1 text-xs text-muted-foreground bg-secondary rounded-full">
                +{remainingCount} more
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
