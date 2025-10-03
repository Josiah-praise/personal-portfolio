import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TechBadge } from './tech-badge';
import type { ProjectCard as ProjectCardType } from '@/lib/data/projects-data';

interface ProjectCardProps {
  project: ProjectCardType;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const displayTechnologies = project.technologies.slice(0, 4);
  const remainingCount = project.technologies.length - 4;

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden bg-muted">
            <Image
              src={project.thumbnail}
              alt={`${project.title} project thumbnail`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="mb-4 line-clamp-2">
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-2">
            {displayTechnologies.map((tech) => (
              <TechBadge key={tech} technology={tech} />
            ))}
            {remainingCount > 0 && (
              <span className="px-3 py-1 text-sm text-muted-foreground">
                +{remainingCount} more
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
