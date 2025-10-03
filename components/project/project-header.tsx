import { Badge } from '@/components/ui/badge';
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
      <div className="mb-4">
        <Badge variant="secondary" className="mb-4">
          {project.category}
        </Badge>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
        {project.title}
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
        <span>
          {formatDate(project.startDate)} - {formatDate(project.endDate)}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
      </div>
    </header>
  );
}
